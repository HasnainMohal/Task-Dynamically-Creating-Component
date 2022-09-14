
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
 
})
export class CustomSelectComponent implements OnInit {
  List: { id: number, name: string }[] = [
    
  ];


  ngOnInit(): void {
    this.List = this.options;
    
  }
  @Input() options:any;
  @Input() label:any;
  @Input('formControl')
  formControl!: UntypedFormControl;

}

