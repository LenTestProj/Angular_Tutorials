import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService, DataService]
})
export class UserComponent implements OnInit {
    user:{name:String}={name:''};
    isLoggedIn:Boolean=false;
    data:string|unknown='';

    constructor(private userService:UserService,private dataService:DataService) { }

    ngOnInit(): void {
        this.user=this.userService.user;
        this.dataService.getDetails().then((data)=>{
            this.data=data
        })
    }

}
