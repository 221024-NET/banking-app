import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPwComponent } from './components1/forgot-pw/forgot-pw.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components1/login/login.component';
import { SignupComponent } from './components1/signup/signup.component';
import { DashboardComponent } from './components2/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '/home',
    component: HomeComponent,
    children: [
      {
        path: '/login',
        component: LoginComponent,
      },
      {
        path: '/signup',
        component: SignupComponent,
      },
      {
        path: '/forgotpw',
        component: ForgotPwComponent,
      },
    ],
  },
  { path: '/dashboard', component: DashboardComponent },
];

// export const routes: Routes = [

//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: '/home', component: HomeComponent },
//   { path: '/forgotpw', component: ForgotPwComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '/signup', component: SignupComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
