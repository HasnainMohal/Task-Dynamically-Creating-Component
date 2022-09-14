import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { DataServiceService } from '../app/Services/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: any;
  form!: FormGroup;
  DataService;
  constructor(){
    this.DataService=new DataServiceService();
    this.questions= this.DataService.GetData();
  }
  ngOnInit() {
    this.form! = this.toFormGroup(this.questions);
  }
  toFormGroup(questions:any ) {
    const group: any = {};

    questions.forEach((question: any ) => {
      if(question.type==="sections")
      {
        const group1: any = {};

        question.sections.forEach((question: any ) => {
          group1[question.key]=question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
        })
        group[question.key]=new FormGroup(group1);
      }
      else{
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      }
      
    });

    return new FormGroup(group);
  }
 
   isValid(key:any,type:any) {
    if(type!=="sections")
    {
      return this.form.controls[key].valid;
    }
   return true
  
  }

  isValid1(key:any,type:any) {
     let form1 =this.form.get(type) as FormArray;
     let bool = form1.controls[key].valid;
     return bool;
    
  
  }

}