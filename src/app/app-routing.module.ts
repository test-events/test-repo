import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { CrossoverPageComponent } from './pages/crossover-page/crossover-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlatformPageComponent } from './pages/platform-page/platform-page.component';
import { Ui5PageComponent } from './pages/ui5-page/ui5-page.component';
import { LuigiPreloadComponent } from '@luigi-project/client-support-angular';

// Routing
const routes: Routes = [
  { path: 'platform', component: PlatformPageComponent, data: { fromVirtualTreeRoot: true } },
  { path: 'ui5', component: Ui5PageComponent, data: { fromVirtualTreeRoot: true } },
  { path: 'home', component: HomePageComponent, data: { fromVirtualTreeRoot: true } },
  { path: 'core', component: CorePageComponent, data: { fromVirtualTreeRoot: true } },
  { path: 'crossover', component: CrossoverPageComponent, data: { fromVirtualTreeRoot: true } },
  { path: 'preload', component: LuigiPreloadComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
