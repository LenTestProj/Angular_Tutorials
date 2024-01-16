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
                if(count==5){
                    observer.complete()
                }
                if(count>3){
                    observer.error(new Error("Count is greater than 3"))
                }
                count++;
            },1000)
        });

        this.firstObjectSubscription = customIntervalObservable.subscribe({next:value=>{
            console.log(value);
        },error:err=>{
            console.log(err);
            alert(err.message);
        },complete:()=>{
            console.log('Completed')
        }})
    }

    ngOnDestroy(): void {
        this.firstObjectSubscription?.unsubscribe()
    }

}
