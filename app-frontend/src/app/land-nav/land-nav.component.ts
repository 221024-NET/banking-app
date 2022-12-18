import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-land-nav',
  templateUrl: './land-nav.component.html',
  styleUrls: ['./land-nav.component.css'],
})
export class LandNavComponent implements OnInit {
  constructor(private navbarService: NavbarService, private router: Router) {}

  testLogin() {
    this.navbarService.showNavbar = !this.navbarService.showNavbar;
    this.router.navigate(['/dashboard']);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {}
}
