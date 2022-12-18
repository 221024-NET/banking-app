import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Droid Finance';

  constructor(public navbarService: NavbarService) {}
}
