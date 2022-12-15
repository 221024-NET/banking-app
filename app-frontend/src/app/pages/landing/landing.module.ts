import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { HomeComponent } from './components/home/home.component';
import { LandFooterComponent } from './components/land-footer/land-footer.component';
import { LandNavComponent } from './components/land-nav/land-nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingRoutesModule } from './landing-routes.module';

@NgModule({
  imports: [CommonModule, SharedModule, LandingRoutesModule],
  declarations: [
    ForgotPwComponent,
    HomeComponent,
    LandFooterComponent,
    LandNavComponent,
    LoginComponent,
    SignupComponent,
  ],
  exports: [
    ForgotPwComponent,
    HomeComponent,
    LandFooterComponent,
    LandNavComponent,
    LoginComponent,
    SignupComponent,
  ],
})
export class LandingModule {}
