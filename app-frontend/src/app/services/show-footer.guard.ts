import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ShowFooterGuard {
  constructor(private router: Router) {}

  canShowFooter(): boolean {
    const allowedPaths = ['/home', '/login', '/signup', '/forgot-password'];
    return allowedPaths.includes(this.router.url);
  }
}
