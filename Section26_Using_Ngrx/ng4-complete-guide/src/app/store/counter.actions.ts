import { createAction,props } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";

// export const increement = createAction(
//     '[Counter] Increement',
//     props<{value:number}>()
// );

export class IncreementAction implements Action<{value:number}>{
    readonly type="[Counter] Increement";
    constructor(public value:number){}
}

export const CounterActions=IncreementAction