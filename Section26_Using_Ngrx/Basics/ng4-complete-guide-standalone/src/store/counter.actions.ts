import { createAction, props } from "@ngrx/store";

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