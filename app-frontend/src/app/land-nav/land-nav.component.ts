import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentuserService } from '../services/currentuser.service';
import { Account } from '../classes/accountobject';

@Component({
  selector: 'app-land-nav',
  templateUrl: './land-nav.component.html',
  styleUrls: ['./land-nav.component.css'],
})
export class LandNavComponent implements OnInit {
  constructor(private router: Router, private currentuser: CurrentuserService) {}

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {
  }
}
