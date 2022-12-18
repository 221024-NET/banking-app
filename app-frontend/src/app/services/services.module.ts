import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFooterGuard } from './show-footer.guard';
import { NavbarService } from './navbar.service';

@NgModule({
  imports: [CommonModule],
  providers: [ShowFooterGuard, NavbarService],
})
export class ServicesModule {}
