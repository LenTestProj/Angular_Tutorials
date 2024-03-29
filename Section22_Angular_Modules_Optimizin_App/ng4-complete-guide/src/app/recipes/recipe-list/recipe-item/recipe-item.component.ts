import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe:Recipe={ name:'', description:'',imagePath:'',ingredients:[]};
    @Input() index:number|undefined;
    constructor(private recipeService:RecipeService) { }

    ngOnInit(): void {
    }

}
