import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CrossoverPageComponent } from './crossover-page.component';
import { LuigiContextService, LuigiContextServiceImpl } from "@luigi-project/client-support-angular";

describe('CrossoverPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CrossoverPageComponent
      ],
      providers: [ { provide: LuigiContextService, useClass: LuigiContextServiceImpl }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CrossoverPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dxp-micro-frontend-ngx'`, () => {
    const fixture = TestBed.createComponent(CrossoverPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dxp-micro-frontend-ngx');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CrossoverPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('fd-dynamic-page-header').attributes.getNamedItem('title').value).toEqual('Angular Micro-Frontend Template');
  });
});
