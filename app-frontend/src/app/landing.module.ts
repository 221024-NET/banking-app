import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBtnComponent } from './logo-btn.component';
import { ThemeBtnComponent } from './theme-btn.component';
import { HomeComponent } from './home/home.component';
import { LandNavComponent } from './land-nav/land-nav.component';
import { LandFooterComponent } from './land-footer/land-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LogoBtnComponent,
    ThemeBtnComponent,
    HomeComponent,
    LandNavComponent,
    LandFooterComponent,
  ],
  exports: [HomeComponent, LandFooterComponent, LandNavComponent],
})
export class LandingModule {}
