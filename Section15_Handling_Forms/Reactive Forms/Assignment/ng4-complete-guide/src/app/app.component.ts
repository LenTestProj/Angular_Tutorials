import { Component,OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    statuses=['Stable','Critical','Finished']
    projectForm:FormGroup=new FormGroup({});

    ngOnInit(): void {
        this.projectForm=new FormGroup({
            'projectName':new FormControl(null,[Validators.required,CustomValidators.invalidProjectName.bind(this)],<AsyncValidatorFn>CustomValidators.asyncInvalidProjectName),
            'email':new FormControl(null,[Validators.required,Validators.email]),
            'projectStatus':new FormControl('critical')
        })
    }

    onSaveProject(){
        console.log(this.projectForm.value);    
    }
    
}
