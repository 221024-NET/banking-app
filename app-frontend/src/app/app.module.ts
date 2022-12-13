import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingPagesModule } from './landing-pages/landing-pages.module';
import { UserPagesModule } from './user-pages/user-pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LandingPagesModule,
    UserPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
