import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import {AlertComponent} from '../shared/alert/alert.component';
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnDestroy{
    isLoginMode=true;   
    IsLoading=false;
    error:string|null='';
    @ViewChild(PlaceHolderDirective) alertHost:PlaceHolderDirective|undefined

    private closeSub:Subscription=new Subscription();

    constructor(private authService:AuthService, private router:Router, private componentFactoryResolver:ComponentFactoryResolver){}


    onSwitchMode(){
        this.isLoginMode=!this.isLoginMode;
    }

    onSubmit(form:NgForm){
        if(!form.valid){
            return;      
        }
        const email=form.value.email;
        const password=form.value.password;

        let authObs:Observable<AuthResponseData>;

        this.IsLoading=true;
        if(this.isLoginMode){
            authObs = this.authService.login(email,password);   
        }
        else{
            authObs = this.authService.signup(email,password);
        }

        authObs.subscribe({next:resData=>{
            console.log(resData)
            this.IsLoading=false;
            this.error=''; 
            this.router.navigate(['/recipes']) 
        },error:error=>{
            console.log(error);
              this.error=error.
              message;
              this.showErrorAlert(error)
              this.IsLoading=false;
        }}) 

        form.reset();
    }

    OnHandleError(){
      this.error=null;  
    }

    ngOnDestroy(): void {
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }

    private showErrorAlert(message:string){
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)///dynamically load the component

        const hostViewContainerRef=this.alertHost?.viewContainerRef;
        hostViewContainerRef?.clear(); //in case other components have used this ref.

        const componentRef = hostViewContainerRef?.createComponent(alertCmpFactory);

        if(componentRef)
        {
            componentRef.instance.message=message;
            this.closeSub = componentRef.instance.close.subscribe(()=>{
this.closeSub.unsubscribe();
hostViewContainerRef?.clear()
            })
        }


    }
}