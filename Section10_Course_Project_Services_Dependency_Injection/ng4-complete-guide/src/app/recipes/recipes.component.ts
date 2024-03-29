import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
    selectedRecipe:Recipe|undefined;
    
    constructor(private recipeService:RecipeService) { }

    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
           this.selectedRecipe=recipe; 
        })
    }

}
