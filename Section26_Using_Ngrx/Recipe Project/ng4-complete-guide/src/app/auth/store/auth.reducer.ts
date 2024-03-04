import { Action } from "@ngrx/store";
import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
   user:User|null; 
}

const initialState={
    user:null
}

export function authReducer(state:State=initialState,action:AuthActions.AuthActions|Action){
    switch(action.type){
        case AuthActions.LOGIN:
            const loginAction=(action as AuthActions.Login);
            const user=new User(loginAction.payload.email,loginAction.payload.userId,loginAction.payload.token,loginAction.payload.expirationDate);
            return {
                ...state,
                user:user
            }
        case AuthActions.LOGOUT:
            return {
                ...state,
                user:null
            }    
        default:
            return state
    }
}