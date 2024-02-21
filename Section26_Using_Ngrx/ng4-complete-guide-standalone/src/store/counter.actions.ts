import { createAction, props } from "@ngrx/store";

export const increement = createAction(
    '[Counter] Increement',
    props<{value:number}>()
);