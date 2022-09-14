import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  @Input() question: any;
  @Input() formgroup!: FormGroup;
  isValidAction(key:any,type:any) {
 
    if(type!=="sections")
    {
      return this.formgroup.controls[key].valid;
    }
   return true
  }
  isValidAction1(key:any,type:any) {
    let form1 =this.formgroup.get(type) as FormArray;
    let bool = form1.controls[key].valid;
    return bool;
  }
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
