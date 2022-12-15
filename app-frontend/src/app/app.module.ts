import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LandingModule } from './pages/landing/landing.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, MainComponent],
  imports: [BrowserModule, HttpClientModule, LandingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
