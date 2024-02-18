import { NgFor } from '@angular/common';
import { Component, Signal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
    actions = signal<string[]>([]);
    counter = signal(0);
    doubleCounter=computed(()=>this.counter()*2)
    //computed is used to get a new value based on some other signal value    

    constructor(){
        effect(()=>{
            console.log(this.counter())
        });
    }


    increment() {
        // this.counter.update((oldCounter)=>oldCounter+1);
        this.counter.set(this.counter()+1)
        this.actions.mutate((oldActions)=>oldActions.push("INCREMENT"))
    }

    decrement() {
        this.counter.update(oldValue=>oldValue-1);
        this.actions.update((oldActions)=>[...oldActions,"DECREEMENT"])
    }
}
