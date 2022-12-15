import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPwComponent } from './pages/landing/components/forgot-pw/forgot-pw.component';
import { HomeComponent } from './pages/landing/components/home/home.component';
import { LoginComponent } from './pages/landing/components/login/login.component';
import { SignupComponent } from './pages/landing/components/signup/signup.component';
import { LandingRoutesModule } from './pages/landing/landing-routes.module';

export const routes: Routes = [
  { path: '/', redirectTo: 'home', pathMatch: 'full' },
  { path: '/home', component: HomeComponent },
  { path: '/forgotpw', component: ForgotPwComponent },
  { path: 'login', component: LoginComponent },
  { path: '/signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingRoutesModule],
  exports: [RouterModule],
})
export class AppRoutesModule {}
