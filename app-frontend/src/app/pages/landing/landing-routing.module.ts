import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
// import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandNavComponent } from './components/land-nav/land-nav.component';

const routes: Routes = [
  { path: '/', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '/forgotpw', component: ForgotPwComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
