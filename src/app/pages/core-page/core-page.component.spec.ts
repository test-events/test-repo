import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CorePageComponent } from './core-page.component';

describe('CorePageComponent', () => {
  let component: CorePageComponent;
  let fixture: ComponentFixture<CorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
