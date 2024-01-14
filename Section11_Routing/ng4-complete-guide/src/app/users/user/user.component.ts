import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string}={id:0,name:''};
  paramsSubscription:Subscription|undefined;

  constructor(private route:ActivatedRoute) {

   }

  ngOnInit() {
    //below approach is used if the component is called only from other component
    this.user={
        id:this.route.snapshot.params['id'],
        name:this.route.snapshot.params['name']
    };
    //below approach is used if the component is called with itself..
    this.paramsSubscription= this.route.params.subscribe(
        (params:Params)=>{
            this.user.id=params['id'];
            this.user.name=params['name'];
        }
    )
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
