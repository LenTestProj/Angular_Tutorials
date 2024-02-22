import { Component } from '@angular/core';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { Store } from '@ngrx/store';
import { init } from 'src/store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CounterOutputComponent, CounterControlsComponent],
})
export class AppComponent {
    ngOnInit(): void {
        this.store.dispatch(init())  
      }
  
      constructor(private store:Store){}
}
