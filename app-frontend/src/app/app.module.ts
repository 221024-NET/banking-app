import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
// Dark mode service
import { ThemeService } from './services/theme.service';
// Components
import { LandingModule } from './landing.module';
import { UserModule } from './user.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularWebStorageModule,
    AppRoutesModule,
    LandingModule,
    UserModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
