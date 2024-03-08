import { Action } from "@ngrx/store";
import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
   user:User|null; 
   authError:string|null;
   loading:boolean;
}

const initialState={
    user:null,
    authError:null,
    loading:false
}

export function authReducer(state:State=initialState,action:AuthActions.AuthActions|Action){
    switch(action.type){
        case AuthActions.AUTHENTICATE_SUCCESS:
            const loginAction=(action as AuthActions.AuthenticateSuccess);
            const user=new User(loginAction.payload.email,loginAction.payload.userId,loginAction.payload.token,loginAction.payload.expirationDate);
            return {
                ...state,
                user:user,
                authError:null
            }
        case AuthActions.LOGOUT:
            return {
                ...state,
                user:null
            } 
        case AuthActions.LOGIN_START:
           return {
                ...state,
                authError:null,
                loading:true
           }   
        case AuthActions.AUTHENTICATE_FAIL:
            return {
                ...state,
                user:null,
                authError:(action as AuthActions.AuthenticateFail).payload,
                loading:false
            }
        case AuthActions.LOGIN_START:    
        case AuthActions.SIGNUP_START:
            return {
                ...state,
                authError:null,
                loading:true
            }   
        case AuthActions.CLEAR_ERROR:
            return {
                ...state,
                authError:null
            }   
        default:
            return state
    }
}
