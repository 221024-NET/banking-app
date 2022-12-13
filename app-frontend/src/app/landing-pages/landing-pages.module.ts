import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { LoginComponent } from './login/login.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingBtnComponent } from './components/landing-nav/landing-btn/landing-btn.component';

@NgModule({
  declarations: [
    SignupComponent,
    ForgotPwComponent,
    LoginComponent,
    LandingFooterComponent,
    LandingBtnComponent,
  ],
  imports: [CommonModule],
  exports: [
    SignupComponent,
    ForgotPwComponent,
    LoginComponent,
    LandingFooterComponent,
  ],
})
export class LandingPagesModule {}
