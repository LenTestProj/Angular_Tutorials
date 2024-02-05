import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    isLoginMode=true;   
    IsLoading=false;
    error:string='';


    constructor(private authService:AuthService){}


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
        },error:error=>{
            console.log(error);
              this.error=error.
              message;
              this.IsLoading=false;
        }}) 

        form.reset();
    }
}