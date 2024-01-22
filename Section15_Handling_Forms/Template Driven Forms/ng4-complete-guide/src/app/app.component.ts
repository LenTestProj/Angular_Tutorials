import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signnupForm:NgForm|undefined;  
    defaultQuestion='pet';
    answer="";
    genders=['male','female'];
    user={
        username:'',
        email:'',
        secretQuestion:'',
        answer:'',
        gender:''
    };
    submitted=false;

    suggestUserName() {
        const suggestedName = 'Superuser';
        // this.signnupForm?.setValue({
        //     userData:{
        //         username:suggestedName,
        //         email:''
        //     },
        //     secret:'get',
        //     questionAnswer:'',
        //     gender:'male'
        // })  this will overwrite the existing data
        this.signnupForm?.form.patchValue({
            userData:{
                username:suggestedName
            }
        })
        //only overwrite existing value.
    }

    //   onSubmit(form:NgForm){
    //     console.log(form) 
    //   }
  onSubmit(form:NgForm){
    this.submitted=true;

    this.user.username=this.signnupForm?.value.userData.username;
    this.user.email=this.signnupForm?.value.userData.email;
    this.user.secretQuestion=this.signnupForm?.value.secret;
    this.user.answer=this.signnupForm?.value.questionAnswer;
    this.user.gender=this.signnupForm?.value.gender;

    this.signnupForm?.reset();
  }
}
