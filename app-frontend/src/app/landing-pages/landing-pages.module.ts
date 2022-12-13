import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { LoginComponent } from './login/login.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';

// TODO: Make Objects

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    ForgotPwComponent,
    LoginComponent,
    LandingFooterComponent,
    LandingNavComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    SignupComponent,
    ForgotPwComponent,
    LoginComponent,
    LandingFooterComponent,
    LandingNavComponent,
  ],
})
export class LandingPagesModule {}
