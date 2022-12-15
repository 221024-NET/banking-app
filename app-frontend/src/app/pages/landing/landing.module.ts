import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { HomeComponent } from './components/home/home.component';
import { LandFooterComponent } from './components/land-footer/land-footer.component';
import { LandNavComponent } from './components/land-nav/land-nav.component';

@NgModule({
  declarations: [
    ForgotPwComponent,
    HomeComponent,
    LandFooterComponent,
    LandNavComponent,
  ],
  exports: [
    ForgotPwComponent,
    HomeComponent,
    LandFooterComponent,
    LandNavComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class LandingModule {}
