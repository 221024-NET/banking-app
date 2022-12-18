import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFooterGuard } from './show-footer.guard';
import { NavbarService } from './navbar.service';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [CommonModule],
  providers: [ShowFooterGuard, NavbarService, ThemeService],
})
export class ServicesModule {}
