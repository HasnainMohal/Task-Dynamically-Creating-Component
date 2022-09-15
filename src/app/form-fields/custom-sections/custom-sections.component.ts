import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-sections',
  templateUrl: './custom-sections.component.html',
  styleUrls: ['./custom-sections.component.css']
})
export class CustomSectionsComponent implements OnInit {
  @Input() questions:any;
  @Input() group!:UntypedFormGroup;
  @Input() sectionlabe:any; 
  constructor() { }

  ngOnInit(): void {
    console.log("Question",this.sectionlabe);
  }

}
