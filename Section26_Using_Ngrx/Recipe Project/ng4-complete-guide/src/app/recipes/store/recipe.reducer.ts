import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";
import * as RecipeActions from './recipe.actions';

export interface State{
   recipes:Recipe[]; 
}

const initialState:State={
    recipes:[]
}

export function recipeReducer(state=initialState,action:RecipeActions.RecipeActions|Action){
    switch(action.type){
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes:[...(action as RecipeActions.SetRecipes).payload]
            }
        default:
            return state;    
    }
}