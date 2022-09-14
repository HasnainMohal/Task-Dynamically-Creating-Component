import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLableComponent } from './custom-lable.component';

describe('CustomLableComponent', () => {
  let component: CustomLableComponent;
  let fixture: ComponentFixture<CustomLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
