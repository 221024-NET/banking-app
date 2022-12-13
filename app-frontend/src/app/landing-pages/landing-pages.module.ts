import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { LoginComponent } from './login/login.component';

// TODO: Make Objects

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    ForgotPwComponent,
    LoginComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, SignupComponent, ForgotPwComponent, LoginComponent],
})
export class LandingPagesModule {}
