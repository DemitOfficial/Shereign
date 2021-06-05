/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotherDataComponent } from './MotherData.component';

describe('MotherDataComponent', () => {
  let component: MotherDataComponent;
  let fixture: ComponentFixture<MotherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
