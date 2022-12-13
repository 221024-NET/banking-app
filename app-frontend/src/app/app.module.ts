import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppLayoutModule } from './shared/app-layout.module';
import { LandingPagesModule } from './landing-pages/landing-pages.module';
import { UserPagesModule } from './user-pages/user-pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
