import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPwComponent } from './pages/l-components/forgot-pw/forgot-pw.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/l-components/login/login.component';
import { SignupComponent } from './pages/l-components/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '/home', component: HomeComponent },
  { path: '/forgotpw', component: ForgotPwComponent },
  { path: 'login', component: LoginComponent },
  { path: '/signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
