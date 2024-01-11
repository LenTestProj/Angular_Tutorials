import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe|undefined;  
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onAddShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients!)
  }
}
