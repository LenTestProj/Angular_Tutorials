import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decreement, increement, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffects {

    loadCount$=createEffect(()=>this.actions$.pipe(
        ofType(init),
        //switch map returns a new Obseervable
        switchMap(()=>{
            const storedCounter = localStorage.getItem('count');
            if(storedCounter){
                return of(set({value:+storedCounter}))  // "of" is sued to convert data to an Observable
            }
            return of(set({value:0}))
        })
    ))

    savedCount=createEffect(()=>{
        return this.actions$.pipe(
            ofType(increement,decreement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([action,counter])=>{
                console.log(action);
                console.log('counter value: ',counter);
                localStorage.setItem('count',counter.toString());
            })
        )
    }, {dispatch:false});

    constructor(private actions$:Actions,private store:Store<{counter:number}>){}
}