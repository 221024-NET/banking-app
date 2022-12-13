import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { LoginComponent } from './login/login.component';

// TODO: Make Objects

@NgModule({
  declarations: [SignupComponent, ForgotPwComponent, LoginComponent],
  imports: [CommonModule],
  exports: [SignupComponent, ForgotPwComponent, LoginComponent],
})
export class LandingPagesModule {}
