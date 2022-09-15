import { AfterViewInit, Directive, Input, OnInit, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
import { CustomCheckboxComponent } from '../form-fields/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from '../form-fields/custom-radio/custom-radio.component';
import { CustomSelectComponent } from '../form-fields/custom-select/custom-select.component';
import { CustomTextComponent } from '../form-fields/custom-text/custom-text.component';
import { CustomLableComponent } from '../form-fields/custom-lable/custom-lable.component';
import { CustomSectionsComponent } from '../form-fields/custom-sections/custom-sections.component';
@Directive({
  selector: '[appFormFields]'
})
export class FormFieldsDirective implements AfterViewInit {
  models: { [type: string]: Type<any> } = {
    text: CustomTextComponent,
    password: CustomTextComponent,
    email: CustomTextComponent,
    checkbox: CustomCheckboxComponent,
    dropdown: CustomSelectComponent,
    radio: CustomRadioComponent,
    sections: CustomSectionsComponent

  }
  constructor(private vcRef: ViewContainerRef) {

  }
  ngAfterViewInit(): void {

    this.questions.forEach((element: any) => {
      const type = element.type;
      var ref: any;
      if (type !== "sections") {

        const component = this.models[type];
        ref = this.vcRef.createComponent(component);
        ref.instance.type = element.type;
        ref.instance.label = element.label;
        ref.instance.formControl = this.group.get(element.key);

      }

      if (type === "radio" || type === "dropdown") {
        ref.instance.options = element.options;
      }
      if (type === "sections") {

        var ref2 = this.vcRef.createComponent(CustomLableComponent);
        ref2.instance.data = element.label;
        const component = this.models[type];
        ref = this.vcRef.createComponent(component);
        ref.instance.questions = element.sections;
        ref.instance.group = this.group.get(element.key);
        // this.vcRef.detach();
        // var ref1: any;
        // const type = section.type
        // const component = this.models[type];
        // const ref = this.vcRef.createComponent(component);
        // ref.instance.type = section.type;
        // ref.instance.label = section.label;
        // ref.instance.formControl = this.group.get(element.key)?.get(section.key);
        // if (type === "radio" || type === "dropdown") {
        //   ref.instance.options = element.options;
        // }


      }

    });


  }

  @Input() questions: any;
  @Input()
  group!: UntypedFormGroup;
  ngOnInit(): void {
  }

}
