import { createAction,props,Action } from "@ngrx/store";

export const init = createAction(
    '[Counter] Init'
);

export const set=createAction(
    '[Counter] Set',
    props<{value:number}>()
)

export const increement = createAction(
    '[Counter] Increement',
    props<{value:number}>()
);

export const decreement=createAction(
    '[Counter] Decreement',
    props<{value:number}>()
)
// export const INCREEMENT='[Counter] Increement';

// export class IncreementAction implements Action{
//     readonly type=INCREEMENT;
//     constructor(public value:number){}
// }

// export type CounterActions=IncreementAction