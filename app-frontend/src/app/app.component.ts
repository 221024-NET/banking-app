import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { ShowFooterGuard } from './services/show-footer.guard';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Droid Finance';
  showFooter = false;

  constructor(
    private router: Router,
    private showFooterGuard: ShowFooterGuard,
    public navbarService: NavbarService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFooter = this.showFooterGuard.canShowFooter();
      }
    });
  }
}
