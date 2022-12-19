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

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutesModule,
    LandingModule,
    UserModule,
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
