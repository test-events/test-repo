// Angular base imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// enable ui5-WebComponents
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// enable Origami (two-way data binding) for ui5-WebComponents
import { APP_INITIALIZER } from '@angular/core';  // might not be required
import { OrigamiFormsModule } from '@codebakery/origami/forms'; // requires FormsModule of @angular/forms

// import <ui5-button> of ui5-WebComponents library
import '@ui5/webcomponents/dist/Button';
import Input from '@ui5/webcomponents/dist/Input';
import CheckBox from '@ui5/webcomponents/dist/CheckBox';
import Link from '@ui5/webcomponents/dist/Link';

// enable browser animations for SAP Fundamental-NGX Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports of SAP Fundamental-NGX Core
import { FundamentalNgxCoreModule, ThemesService } from '@fundamental-ngx/core';

// imports of SAP Fundamental-NGX Platform
import { FundamentalNgxPlatformModule, PlatformDynamicPageModule } from '@fundamental-ngx/platform';

// Imports of Luigi library for angular
import {LuigiAngularSupportModule, LuigiPreloadComponent} from '@luigi-project/client-support-angular';

// Pages
import { PlatformPageComponent } from './pages/platform-page/platform-page.component';
import { Ui5PageComponent } from './pages/ui5-page/ui5-page.component';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CrossoverPageComponent } from './pages/crossover-page/crossover-page.component';

// enable Origami (two-way data binding) for ui5-WebComponents (second step) - might not be required
export function onAppInit(): () => Promise<any> {
  return (): Promise<any> => {
    return Input.define(), CheckBox.define(), Link.define();
  };
}


@NgModule({
  declarations: [
    AppComponent,
    PlatformPageComponent,
    Ui5PageComponent,
    HomePageComponent,
    CorePageComponent,
    CrossoverPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LuigiAngularSupportModule,
    OrigamiFormsModule,
    FundamentalNgxPlatformModule,
    FundamentalNgxCoreModule,
    PlatformDynamicPageModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true
    },
    ThemesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
