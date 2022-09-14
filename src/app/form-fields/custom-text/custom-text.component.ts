import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, UntypedFormControl, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css'],
})
export class CustomTextComponent  {

  constructor() { }

  @Input() type:any;
  @Input() label:any;
  @Input('formControl')
  formControl!: UntypedFormControl;
  @Input!('section') section:any;
}
