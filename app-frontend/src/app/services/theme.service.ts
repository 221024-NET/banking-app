import { Inject, Injectable } from '@angular/core';
import { LocalStorage, StorageService } from 'angular-web-storage';

@Injectable()
export class ThemeService {
  constructor(@Inject(LocalStorage) private local: StorageService) {}

  // Returns true if dark mode is enabled, false otherwise
  isDarkModeEnabled(): boolean {
    return this.local.get('darkMode') === 'enabled';
  }

  // Enables dark mode
  enableDarkMode(): void {
    this.local.set('darkMode', 'enabled');
  }

  // Disables dark mode
  disableDarkMode(): void {
    this.local.set('darkMode', 'disabled');
  }
}
