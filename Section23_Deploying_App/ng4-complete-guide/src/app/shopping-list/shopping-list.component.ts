import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.services';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
    ingredients:Ingredient[]|undefined;
    private igChangedSub:Subscription|undefined;

    constructor(private slService:ShoppingListService,private loggingService:LoggingService) { }

    ngOnInit(): void {
        this.ingredients=this.slService.getIngredients();
        this.igChangedSub=this.slService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
            this.ingredients=ingredients;
        })
        this.loggingService.printlog("Hello from Shopping-list component ngOninit")
    }

    ngOnDestroy(): void {
        this.igChangedSub?.unsubscribe()
    }

    onEditItem(index:number){
        this.slService.startedEditing.next(index);
    }
}
