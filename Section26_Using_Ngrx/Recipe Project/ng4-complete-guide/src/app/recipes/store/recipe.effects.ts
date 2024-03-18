import {Actions, createEffect, ofType } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Recipe} from '../recipe.model';
import { Injectable } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
    fetchRecipes=createEffect(()=>{
        return this.action$.pipe(
            ofType(RecipeActions.FETCH_RECIPES),
            switchMap(()=>{
                return this.http
                    .get<Recipe[]>(
                        'https://ng-course-recipe-book-6f4c2-default-rtdb.firebaseio.com/recipes.json'
                    )
            }),
            map(recipes => {
                return recipes.map(recipe => {
                  return {
                    ...recipe,
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                  };
                });
              }),
            map(recipes=>{
                return new RecipeActions.SetRecipes(recipes); //this action will automaticaly dispatched ngrx actoions
            }  
        ))   
    })

    storeRecipes=createEffect(()=>{
        return this.action$.pipe(
            ofType(RecipeActions.STORE_RECIPES),
            withLatestFrom(this.store.select('recipes'),
            switchMap(data=>{
                return this.http
                .put(
                  'https://ng-course-recipe-book-6f4c2-default-rtdb.firebaseio.com/recipes.json',
                  data.recipeState.recipes
                ) 
            })
        )
    })
    constructor(private action$:Actions, private http:HttpClient, private store:Store<fromApp.AppState>){};
}