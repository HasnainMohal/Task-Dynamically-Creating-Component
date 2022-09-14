import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-lable',
  templateUrl: './custom-lable.component.html',
  styleUrls: ['./custom-lable.component.css']
})
export class CustomLableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('data') data:any;
}
