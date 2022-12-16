import { Inject, Injectable } from '@angular/core';
import { LocalStorage, StorageService } from 'angular-web-storage';

// @Injectable()
export class ThemeService {
  constructor(
    @Inject(LocalStorage) private local: StorageService,
    currentTheme: string
  ) {}
  themeBtn = document.querySelector('#theme-btn') as HTMLButtonElement;
  themeIcon = document.querySelector('#theme-icon') as HTMLImageElement;
  icons = document.querySelectorAll(
    '.icon img'
  ) as NodeListOf<HTMLImageElement>;
  currentTheme = '';

  loadPref = () => {
    let theme = localStorage.getItem('themePref');
    if (theme !== null) {
      this.currentTheme = theme;
      this.setTheme(this.currentTheme);
    } else {
      this.currentTheme = 'light';
      this.setTheme(this.currentTheme);
    }
  };

  setTheme = (theme: string) => {
    let pressed = theme === 'dark' ? 'true' : 'false';
    this.themeBtn.setAttribute('aria-pressed', pressed);
    document.documentElement.setAttribute('data-theme', theme);
    // ? this.themeBtn.src = 'images/theme-sun.svg';
    localStorage.setItem('themePref', theme);
    this.icons.forEach((icon) => {
      theme == 'dark'
        ? (icon.src = 'images/arrow-white.svg')
        : (icon.src = 'images/arrow.svg');
    });
  };

  toggleTheme = () => {
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? this.setTheme('light')
      : this.setTheme('dark');
  };

  // themeBtn.addEventListener('click', toggleTheme);
  // document.addEventListener('DOMContentLoaded', loadPref);

  // Returns true if dark mode is enabled, false otherwise
  // isDarkModeEnabled(): boolean {
  //   return this.local.get('darkMode') === 'enabled';
  // }

  // // Enables dark mode
  // enableDarkMode(): void {
  //   this.local.set('darkMode', 'enabled');
  // }

  // // Disables dark mode
  // disableDarkMode(): void {
  //   this.local.set('darkMode', 'disabled');
  // }
}
