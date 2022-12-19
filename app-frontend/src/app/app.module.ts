import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { StorageModule } from '@ngx-pwa/local-storage';
import { AppRoutesModule } from './app-routes.module';
import { ServicesModule } from './services/services.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// Components
import { LandingModule } from './landing.module';
import { UserModule } from './user.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './components1/login/login.component';
import { SignupComponent } from './components1/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutesModule,
    LandingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
