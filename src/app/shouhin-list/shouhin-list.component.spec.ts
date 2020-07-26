/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShouhinListComponent } from './shouhin-list.component';

describe('ShouhinListComponent', () => {
  let component: ShouhinListComponent;
  let fixture: ComponentFixture<ShouhinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouhinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouhinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
