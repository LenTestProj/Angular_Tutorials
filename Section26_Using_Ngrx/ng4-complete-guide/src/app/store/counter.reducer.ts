import { createReducer,on } from "@ngrx/store";
// import { increement } from "./counter.actions";
import {CounterActions} from './counter.actions';

const initialState=0;

// export const counterReducer=createReducer(
//     initialState,
//     on(increement, (state,action)=>{
//         return state+action.value
//     })
// );

export function counterReducer(state=initialState,action:CounterActions){
    if(action.type==='[Counter] Increement'){
        return state+action.value
    }
    return state;
}