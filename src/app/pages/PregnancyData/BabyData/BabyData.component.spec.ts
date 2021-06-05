/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BabyDataComponent } from './BabyData.component';

describe('BabyDataComponent', () => {
  let component: BabyDataComponent;
  let fixture: ComponentFixture<BabyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
