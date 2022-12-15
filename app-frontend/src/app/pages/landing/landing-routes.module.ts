import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/forgotpw', component: ForgotPwComponent },
  { path: '/login', component: LoginComponent },
  { path: '/signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutesModule {}
