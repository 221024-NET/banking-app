import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBtnComponent } from './logo-btn.component';
import { ThemeBtnComponent } from './theme-btn/theme-btn.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LogoBtnComponent, ThemeBtnComponent],
  exports: [LogoBtnComponent, ThemeBtnComponent],
})
export class SharedModule {}
