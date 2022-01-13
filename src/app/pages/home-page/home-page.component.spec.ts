import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { HomePageComponent } from './home-page.component';
import {AppVersions} from '../../utils/versions';
import { LuigiContextService, LuigiContextServiceImpl } from "@luigi-project/client-support-angular";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ { provide: LuigiContextService, useClass: LuigiContextServiceImpl }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have proper angular version'`, () => {
    expect(component.version).toEqual(AppVersions.GetAngularVersion());
  });
});
