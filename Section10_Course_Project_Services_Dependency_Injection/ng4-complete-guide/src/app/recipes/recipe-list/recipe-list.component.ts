import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]|undefined;
    
    constructor(private recipeService:RecipeService) { }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }

    

}
