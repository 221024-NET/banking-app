import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeBtnComponent } from './theme-btn/theme-btn.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ThemeBtnComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, MainComponent, FooterComponent, ThemeBtnComponent],
})
export class SharedModule {}
