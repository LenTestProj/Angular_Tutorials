import { Action, UPDATE } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
    shoppingList:State
}

export interface State {
    ingredients:Ingredient[],
    editedIngredient:Ingredient|null,
    editedIngredientIndex:number
}

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient:null,
    editedIngredientIndex:-1,
}

export function shoppingListReducer(state:State = initialState, action: ShoppingListActions.ShoppingListActions|Action) {
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
            const ingredient=state.ingredients[state.editedIngredientIndex];
            const updatedIngredient={
                ...ingredient,
                ...updateAction.payload
            }
            const updateIngredients=[...state.ingredients];
            updateIngredients[state.editedIngredientIndex]=updatedIngredient;
        
            return {
                ...state,
                ingredients:updateIngredients,
                editedIngredient:null,
                editedIngredientIndex:-1
            }

        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients:state.ingredients.filter((_,i)=>i!==state.editedIngredientIndex),
                editedIngredient:null,
                editedIngredientIndex:-1
            }  
        
        case ShoppingListActions.START_EDIT:
            const startEditAction=(action as ShoppingListActions.StartEdit);
            return {
                ...state,
                editedIngredientIndex:startEditAction.payload,
                editedIngredient:{...state.ingredients[startEditAction.payload]}
            }  
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredientIndex:-1,
                editedIngredient:null   
            }
        default:
            return state

    }
}