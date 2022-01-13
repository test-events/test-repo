import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { Ui5PageComponent } from './ui5-page.component';

describe('Ui5PageComponent', () => {
  let component: Ui5PageComponent;
  let fixture: ComponentFixture<Ui5PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ui5PageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ui5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
