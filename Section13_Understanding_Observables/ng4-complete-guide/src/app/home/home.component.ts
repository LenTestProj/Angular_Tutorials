import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Observer, Subscription, interval} from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
    private firstObjectSubscription:Subscription|undefined;

    constructor() { }

    ngOnInit() {
        // this.firstObjectSubscription = interval(1000).subscribe({next:count=>{
        //     console.log(count)
        // }})
        const customIntervalObservable=new Observable((observer:Observer<void|number>)=>{
            let count=0;
            setInterval(()=>{
                observer.next(count);
                count++;
            },1000)
        });

        this.firstObjectSubscription = customIntervalObservable.subscribe(data=>{
            console.log(data);
        })
    }

    ngOnDestroy(): void {
        this.firstObjectSubscription?.unsubscribe()
    }

}
