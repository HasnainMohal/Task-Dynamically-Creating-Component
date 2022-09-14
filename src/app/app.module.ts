import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomSelectComponent } from '../app/form-fields/custom-select/custom-select.component';
import { CustomTextComponent } from '../app/form-fields/custom-text/custom-text.component';
import { CustomCheckboxComponent } from '../app/form-fields/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from './form-fields/custom-radio/custom-radio.component';
import { FormFieldsDirective } from './Directive/form-fields.directive';
import { CustomLableComponent } from './form-fields/custom-lable/custom-lable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, NgbModule],
  declarations: [ AppComponent, CustomSelectComponent,CustomTextComponent, CustomCheckboxComponent, CustomRadioComponent, FormFieldsDirective, CustomLableComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
