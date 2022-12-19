import { Account } from './../../classes/accountobject';
import { CurrentuserService } from '../../services/currentuser.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/classes/userobject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  currentUser: User = new User(0, "", "", "", "", "");
  currentAccnts: Account[] = [];

  constructor(private router: Router, private userSevice: CurrentuserService) {}

  ngOnInit(): void {
    this.currentUser = this.userSevice.getData();
    this.currentAccnts = this.userSevice.getAccts();
  }

  goProfile() {
    this.router.navigate(['/profile']);
  }

  goTransactions() {
    this.router.navigate(['transactions']);
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

  createCheckings() {

  }

  createSavings() {

  }
}
