import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent {
  constructor(private navbarService: NavbarService, private router: Router) {}

  goProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.navbarService.changeNavBar = !this.navbarService.changeNavBar;
    this.router.navigate(['/home']);
  }
}
