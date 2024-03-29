import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.services';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id:number|undefined;
    editMode=false;

    constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

    recipeForm:FormGroup=new FormGroup({});

    ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
            this.id=+params['id'];    
            this.editMode=params['id']!=null;
            this.initForm()
        })
    }

    onSubmit(){
        // const newRecipe=new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imagePath'],this.recipeForm.value['ingredients']);
        if(this.editMode){
           this.recipeService.updateRecipe(this.id!,this.recipeForm.value);
        }
        else{
            this.recipeService.addRecipes(this.recipeForm.value);
        }
        this.onCancel();
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
                        'name':new FormControl(ingredient.name,Validators.required),
                        'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }))
                }
            }
        }

        this.recipeForm=new FormGroup({
            'name':new FormControl(recipeName,Validators.required),
            'imagePath':new FormControl(recipeImageUrl, Validators.required),
            'description':new FormControl(recipeDescription,Validators.required),
            'ingredients':recipeIngredients
        })
    }

    getIngredients(){
        return (<FormArray>this.recipeForm.get('ingredients'))!.controls;
    }

    onAddIngredient(){
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name':new FormControl(null,Validators.required),
                'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
        )   
    }

    onCancel(){
        this.router.navigate(['../'],{relativeTo:this.route})
    }

    onDeleteIngredient(index:number){
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
}
