import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goProfile() {
    this.router.navigate(['/profile']);
  }

  goTransfer() {
    this.router.navigate(['/transfer']);
  }

  goSend() {
    this.router.navigate(['/send']);
  }

  goBudget() {
    this.router.navigate(['/budget']);
  }
}
