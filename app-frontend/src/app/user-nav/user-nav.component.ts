import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent {
  constructor(private router: Router) {}

  // TODO: add to btn:
  // goDashboard() {
  //   this.router.navigate(['/dashboard']);
  // }

  goProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.router.navigate(['/home']);
  }
}