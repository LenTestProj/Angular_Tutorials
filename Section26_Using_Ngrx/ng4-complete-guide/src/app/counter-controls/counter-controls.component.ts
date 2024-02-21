import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncreementAction, 
    // increement
 } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store:Store) {}

  increment() {
    // this.store.dispatch(increement({value:2}))
    this.store.dispatch(new IncreementAction(2))
    }

  decrement() {
    
  }
}
