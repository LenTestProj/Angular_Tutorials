import { Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
    recipes:Recipe[]|undefined;
    subscription:Subscription|undefined;

    constructor(private recipeService:RecipeService, private router:Router, private route:ActivatedRoute) { }
    
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    ngOnInit(): void {
        this.subscription=this.recipeService.recipesChanged.subscribe((recipes:Recipe[])=>{
            console.log("recipes are: ",recipes);
            this.recipes=recipes;
        })
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe(){
        this.router.navigate(['new'], {relativeTo:this.route})
    }    

}
