import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id:number|undefined;
    editMode=false;

    constructor(private route:ActivatedRoute,private recipeService:RecipeService) { }

    recipeForm:FormGroup=new FormGroup({});

    ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
            this.id=+params['id'];    
            this.editMode=params['id']!=null;
            this.initForm()
        })
    }

    onSubmit(){
        console.log(this.recipeForm);    
    }

    private initForm(){
        let recipeName='';
        let recipeImageUrl='';
        let recipeDescription=''
        let recipeIngredients=new FormArray([]);

        if(this.editMode){
            const recipe=this.recipeService.getRecipe(this.id!);
            recipeName=recipe.name;
            recipeImageUrl=recipe.imagePath            ;
            recipeDescription=recipe.description;
            if(recipe['ingredients']){
                for(let ingredient of recipe.ingredients){
                    recipeIngredients.push(new FormGroup({
                        'name':new FormControl(ingredient.name),
                        'amount':new FormControl(ingredient.amount)
                    }))
                }
            }
        }

        this.recipeForm=new FormGroup({
            'name':new FormControl(recipeName),
            'imagePath':new FormControl(recipeImageUrl),
            'description':new FormControl(recipeDescription),
            'ingredients':recipeIngredients
        })
    }

    getIngredients(){
        return (<FormArray>this.recipeForm.get('ingredients'))!.controls;
    }

    onAddIngredient(){
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name':new FormControl(),
                'amount':new FormControl()
            })
        )   
    }

}