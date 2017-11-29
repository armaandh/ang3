import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppFeedbackComponent } from './app.feedback.component';
import { HomeComponent } from './app.home';
//import { PageDefault } from './app.pagedefault';
//import { ProductComponent } from './app.product';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: AppFeedbackComponent },
  //{ path: 'products/:id', component: ProductComponent },
  //{ path: 'products/:id', component: ProductComponent },
  //{ path: 'products/:id', component: ProductComponent },
  //{ path: 'products/:id', component: ProductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
