import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPwComponent } from './components1/forgot-pw/forgot-pw.component';
import { HomeComponent } from './components1/home/home.component';
import { LoginComponent } from './components1/login/login.component';
import { SignupComponent } from './components1/signup/signup.component';
// ! Do not delete:
import { DashboardComponent } from './components2/dashboard/dashboard.component';
// import { ProfileComponent } from './components2/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPwComponent },
  // User views
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
