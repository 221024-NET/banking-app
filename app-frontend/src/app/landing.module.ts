import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeBtnComponent } from './theme-btn.component';
import { HomeComponent } from './components1/home/home.component';
import { LandNavComponent } from './land-nav/land-nav.component';
import { LandFooterComponent } from './land-footer/land-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ThemeBtnComponent,
    HomeComponent,
    LandNavComponent,
    LandFooterComponent,
  ],
  exports: [HomeComponent, LandFooterComponent, LandNavComponent],
})
export class LandingModule {}
