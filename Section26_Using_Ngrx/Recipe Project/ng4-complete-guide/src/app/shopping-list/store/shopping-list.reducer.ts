import { Action, UPDATE } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions|Action) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, (action as ShoppingListActions.AddIngredient).payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:[...state.ingredients,...(action as ShoppingListActions.AddIngredients).payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const updateAction=(action as ShoppingListActions.UpdateIngredients)
            const ingredient=state.ingredients[updateAction.payload.index];
            const updatedIngredient={
                ...ingredient,
                ...updateAction.payload.ingredient
            }
            const updateIngredients=[...state.ingredients];
            updateIngredients[updateAction.payload.index]=updatedIngredient;
        
            return {
                ...state,
                ingredients:updateIngredients
            }

        case ShoppingListActions.DELETE_INGREDIENT:
            const index=(action as ShoppingListActions.DeleteIngredients).payload;
            return {
                ...state,
                ingredients:state.ingredients.filter((_,i)=>i!==index)
            }    
        default:
            return state

    }
}