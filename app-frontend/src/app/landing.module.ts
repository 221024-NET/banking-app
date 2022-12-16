import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components1/home/home.component';
import { LandNavComponent } from './land-nav/land-nav.component';
import { LandFooterComponent } from './land-footer/land-footer.component';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [HomeComponent, LandNavComponent, LandFooterComponent],
  exports: [HomeComponent, LandFooterComponent, LandNavComponent],
  imports: [CommonModule],
  providers: [ThemeService],
})
export class LandingModule {}
