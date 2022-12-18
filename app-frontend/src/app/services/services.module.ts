import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleFooterService } from './handle-footer.service';
import { NavbarService } from './navbar.service';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [CommonModule],
  providers: [HandleFooterService, NavbarService, ThemeService],
})
export class ServicesModule {}
