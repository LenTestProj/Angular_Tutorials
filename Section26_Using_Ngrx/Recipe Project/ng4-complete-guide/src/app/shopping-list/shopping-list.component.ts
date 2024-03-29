import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients:Ingredient[]}>|undefined;
  private subscription: Subscription=new Subscription();

  constructor(
    private loggingService: LoggingService,
    private store:Store<fromApp.AppState>
  ) {}

    ngOnInit() {
        this.ingredients=this.store.select('shoppingList');
        console.log("The Ingredeints are: ",this.ingredients);

        this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
    }

    onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
        this.store.dispatch(new ShoppingListActions.StartEdit(index))
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
}
