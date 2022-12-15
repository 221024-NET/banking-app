import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
// Components
import { LandingModule } from './landing.module';
import { UserModule } from './user.module';
import { HomeComponent } from './home/home.component';
import { LandNavComponent } from './land-nav/land-nav.component';
import { LandFooterComponent } from './land-footer/land-footer.component';

@NgModule({
  declarations: [AppComponent],
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
