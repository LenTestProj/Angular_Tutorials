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
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes:[...state.recipes,(action as RecipeActions.AddRecipe).payload]
            }   
        case RecipeActions.UPDATE_RECIPE:
            const updatedAction=(action as RecipeActions.UpdateRecipe);

            const updatedRecipe={...state.recipes[updatedAction.payload.index],
            ...updatedAction.payload.newRecipe}

            const updatedRecipes=[...state.recipes];
            updatedRecipes[updatedAction.payload.index]=updatedRecipe;

                return {
                    ...state,
                    recipes:updatedRecipes
                }  
        case RecipeActions.DELETE_RECIPE:
                return {
                    ...state,
                    recipes:state.recipes.filter((recipe,index)=>{
                        return index!==(action as RecipeActions.DeleteRecipe).payload
                    })
                }
        default:
            return state;    
    }
}