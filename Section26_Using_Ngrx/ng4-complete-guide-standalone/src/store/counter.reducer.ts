import { createReducer, on } from "@ngrx/store";
import { increement } from "./counter.actions";

const initialState=0;

export const counterReducer=createReducer(
    initialState,
    on(increement, (state,action)=>{
        return state+action.value
    })
);

// export function counterReducer(state=initialState){
//     return state;
// }