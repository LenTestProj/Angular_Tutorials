import { Action, createReducer,on } from "@ngrx/store";
import { decreement, increement, set } from "./counter.actions";
// import {CounterActions, INCREEMENT, IncreementAction} from './counter.actions';

const initialState=0;

export const counterReducer=createReducer(
    initialState,
    on(increement, (state,action)=>{
        return state+action.value
    }),
    on(decreement,(state,action)=>{
        return state-action.value
    }),
    on(set,(state,action)=>{
        return action.value
    })
);

// export function counterReducer(state=initialState,action:CounterActions | Action){
//     if(action.type===INCREEMENT){
//         return state+(action as IncreementAction).value
//     }
//     return state;
// }