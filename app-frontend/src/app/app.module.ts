import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
// Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LandingModule } from './pages/landing/landing.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    LandingModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
