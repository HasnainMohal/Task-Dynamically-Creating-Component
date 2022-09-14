import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: any=[
    {
      "key": "firstName",
      "label": "Name",
      "type": "text",
      "value": "hasnain",
      "required": true,
      "order": 1
    },
    {
      "key": "Faimly",
      "label": "Faimly",
      "type": "text",
      "value": "Haydar",
      "required": true,
      "order": 2,
    },
  
    {
      "key": "Password",
      "label": "Password",
      "type": "password",
      "value": "1234",
      "required": true,
      "order": 3
    },
    {
      "key": "Email",
      "label": "Email",
      "type": "email",
      "value": "29hasnain@gmail.com",
      "required": true,
      "order": 4
    },
   
    {
      "key": "Country",
      "label": "Country",
      "type": "dropdown",
      "value": 1,
      "required": true,
      "options": [
        {
          "id": 1,
          "name": "Pakistan"
        },
        {
          "id": 2,
          "name": "Dubai"
        },
        {
          "id": 3,
          "name": "UAE"
        }
      ],
      "order": 6
    },
    {
      "key": "rememberme",
      "label": "Remember",
      "type": "checkbox",
      "value": true,
      "order": 5
    },
    {
      "key": "Gender",
      "label": "Gender",
      "type": "radio",
      "value": "m",
      "required": true,
      "options": [
        {
          "key": "Male",
          "value": "m"
        },
        {
          "key": "Female",
          "value": "f"
        }
      ],
      "order": 6
    },
    {
      "key": "adresssections",
      "label": "Adress",
      "type": "sections",
      "value": "",
      "order": 2,
      sections:[
        {
          "key": "street",
          "label": "Street",
          "type": "text",
          "value": "1",
          "required": true,
          "order": 2,
        },{
          "key": "House",
          "label": "House",
          "type": "text",
          "value": "2",
          "required": true,
          "order": 2,
        },

      ]
    },
   
    
  ]
  form!: FormGroup;
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