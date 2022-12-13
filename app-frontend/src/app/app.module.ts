import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-mods/header/header.component';
import { ThemeBtnComponent } from './shared-mods/theme-btn/theme-btn.component';
import { LoginBtnComponent } from './landing-pages/components/login-btn/login-btn.component';
import { SignupBtnComponent } from './landing-pages/components/signup-btn/signup-btn.component';
import { LoginFormComponent } from './landing-pages/components/login-form/login-form.component';
import { SignupFormComponent } from './landing-pages/components/signup-form/signup-form.component';
import { ForgotFormComponent } from './landing-pages/components/forgot-form/forgot-form.component';
import { DashboardComponent } from './user-pages/dashboard/dashboard.component';
import { ProfileComponent } from './user-pages/profile/profile.component';
import { ProfileBtnComponent } from './user-pages/components/profile-btn/profile-btn.component';
import { LogoutBtnComponent } from './user-pages/components/logout-btn/logout-btn.component';
import { LoginComponent } from './landing-pages/login/login.component';
import { SignupComponent } from './landing-pages/signup/signup.component';
import { ForgotPwComponent } from './landing-pages/forgot-pw/forgot-pw.component';
import { UserNavComponent } from './user-pages/components/user-nav/user-nav.component';
import { LandingNavComponent } from './landing-pages/components/landing-nav/landing-nav.component';
import { FooterComponent } from './shared-mods/footer/footer.component';
import { MainComponent } from './shared-mods/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeBtnComponent,
    LoginBtnComponent,
    SignupBtnComponent,
    LoginFormComponent,
    SignupFormComponent,
    ForgotFormComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileBtnComponent,
    LogoutBtnComponent,
    LoginComponent,
    SignupComponent,
    ForgotPwComponent,
    UserNavComponent,
    LandingNavComponent,
    FooterComponent,
    MainComponent,
    ForgotFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
