import { Injectable, InjectionToken } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

// TODO: What happened here??

export const currentTheme = new InjectionToken<string>('currentTheme');

@Injectable()
export class ThemeService {
  constructor(private storage: StorageMap) {}

  currentTheme = '';

  loadPref = () => {
    let theme = this.storage
      .get('themePref', { type: 'string' })
      .subscribe((theme): void => {
        if (theme !== undefined) {
          this.currentTheme = String(theme);
        } else {
          this.currentTheme = 'light';
        }
        this.setTheme(this.currentTheme);
      });
  };

  setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    this.storage.set('themePref', theme).subscribe();
  };

  toggleTheme = () => {
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? this.setTheme('light')
      : this.setTheme('dark');
  };

  ngOnInit() {}
  // document.addEventListener('DOMContentLoaded', loadPref);
}
