import { LoginService } from '../../services/superservice.service';
import { IAccount } from './../../classes/accountinterface';
import { Account } from './../../classes/accountobject';
import { CurrentuserService } from '../../services/currentuser.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  currentUser: User = new User(0, "", "", "", "", "");
  currentAccnts: Account[] = [];

  constructor(private router: Router, private userSevice: CurrentuserService, private superservice: LoginService) {}

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

    if (this.currentAccnts[0]) {

    } else {
      let account = new Object as Account;
      account.acct_Id = 0;
      account.user_Id = this.currentUser.user_ID;
      account.balance = 0;
     account.type = "checking";
     this.superservice.PostAccount(account).subscribe(
      (data) => {
        this.superservice.GetAccounts(this.currentUser.user_ID).subscribe(
          (data2) => {
            this.userSevice.setAccts(data2);
            this.currentAccnts = data2;
            this.router.navigateByUrl('/dashboard');
          }
        )
      });
    }
    if (this.currentAccnts[0].type == "checking" || this.currentAccnts[1].type == "checking") {
      alert("You already have a checking account.");
      this.router.navigate(['/dashboard']);
      return;
    }
    let account = new Object as Account;
    account.acct_Id = 0;
    account.user_Id = this.currentUser.user_ID;
    account.balance = 0;
    account.type = "checking";
    this.superservice.PostAccount(account).subscribe(
      (data) => {
        this.superservice.GetAccounts(this.currentUser.user_ID).subscribe(
          (data2) => {
            this.userSevice.setAccts(data2);
            this.currentAccnts = data2;
            this.router.navigateByUrl('/dashboard');
          }
        )
    })
  }

  createSavings() {
    if (this.currentAccnts[1]) {

    } else {
      let account = new Object as Account;
      account.acct_Id = 0;
      account.user_Id = this.currentUser.user_ID;
      account.balance = 0;
     account.type = "savings";
     this.superservice.PostAccount(account).subscribe(
      (data) => {
        this.superservice.GetAccounts(this.currentUser.user_ID).subscribe(
          (data2) => {
            this.userSevice.setAccts(data2);
            this.currentAccnts = data2;
            this.router.navigateByUrl('/dashboard');
          }
        )
      });
    }
    if (this.currentAccnts[0].type == "savings" || this.currentAccnts[1].type == "savings") {
      alert("You already have a savings account.");
      this.router.navigate(['/dashboard']);
      return;
    }
    let account = new Object as Account;
    account.acct_Id = 0;
    account.user_Id = this.currentUser.user_ID;
    account.balance = 0;
    account.type = "savings";
    this.superservice.PostAccount(account).subscribe(
      (data) => {
        this.superservice.GetAccounts(this.currentUser.user_ID).subscribe(
          (data2) => {
            this.userSevice.setAccts(data2);
            this.currentAccnts = data2;
            this.router.navigateByUrl('/dashboard');
          }
        )
    })
  }
}
