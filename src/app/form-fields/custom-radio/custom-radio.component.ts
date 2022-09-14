


import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css'],
 
})
export class CustomRadioComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.options)
  }


  @Input('options') options:any;
  @Input() label:any;
  @Input('formControl')
  formControl!: UntypedFormControl;
  
 
 
}
