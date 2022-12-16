import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
// click = 'toggleTheme()';

@Component({
  selector: 'app-theme-btn',
  template: ` <button
    id="theme-btn"
    type="button"
    title="Toggle Color Mode"
    aria-pressed="false"
  ></button>`,
  styles: [
    `
      #theme-btn {
        font-weight: 400;
        width: 30px;
        height: 30px;
        position: relative;
        top: -5px;
        right: -5px;
        margin: 0 3px;
        overflow: visible;
        border: none;
        background-image: var(--theme-icon);
        background-color: transparent;
      }

      #theme-btn:hover {
        cursor: pointer;
        transform: scale(1.5);
        background-color: var(--theme-icon);
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class ThemeBtnComponent implements OnInit {
  constructor(private darkModeService: ThemeService) {}

  // toggleDarkMode(): void {
  //   if (this.darkModeService.isDarkModeEnabled()) {
  //     this.darkModeService.disableDarkMode();
  //   } else {
  //     this.darkModeService.enableDarkMode();
  //   }
  // }

  ngOnInit() {}
}
