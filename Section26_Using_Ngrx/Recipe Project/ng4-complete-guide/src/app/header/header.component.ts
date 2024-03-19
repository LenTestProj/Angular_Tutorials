import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import { Subscription, map } from 'rxjs';
import * as AuthActions from '../auth/store/auth.actions';
import { Store } from '@ngrx/store';
import * as AppState from '../store/app.reducer';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{
    isAuthenticated=false;
    private userSub:Subscription=new Subscription();

    constructor(private store:Store<AppState.AppState>){}

    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
    
    ngOnInit(): void {
        this.userSub = this.store.select('auth').pipe(map(authState=>{
            return authState.user
        })).subscribe(user=>{
            this.isAuthenticated=!!user;
            console.log(!user);
            console.log(!!user);
        })
    }
    
    onSaveData(){
    //    this.dataStorageService.storeRecipes() 
        this.store.dispatch(new RecipeActions.StoreRecipes())
    }   
    
    onFetchData(){
        // this.dataStorageService.fetchRecipes().subscribe();
        this.store.dispatch(new RecipeActions.FetchRecipes())
    }

    onLogout(){
        this.store.dispatch(new AuthActions.Logout());
    }
}