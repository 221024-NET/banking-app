import { LoginComponent } from './components1/login/login.component';
import { SignupComponent } from './components1/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
// Components
import { LandingModule } from './landing.module';
import { UserModule } from './user.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    LandingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
