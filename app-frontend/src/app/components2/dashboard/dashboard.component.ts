import { Component, OnInit } from '@angular/core';
import { CurrentuserService } from '../../services/currentuser.service';
import { Account } from '../../classes/accountobject';
import { User } from '../../classes/userobject';
import { Router } from '@angular/router';
import { LoginService } from '../../services/superservice.service';
import { Transaction } from '../../classes/transactionobject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  currentuser: User = new User(0, "", "", "", "", "");
  currentaccounts: Account[] = [];
  currenttrans: Transaction[] = [];
  constructor(
    private Currentuserservice: CurrentuserService,
    private router: Router,
    private LoginService: LoginService
    // private Currentaccounts: AccountsService
  ) {}

  ngOnInit(): void{
    this.currentuser = this.Currentuserservice.getData();
    this.currentaccounts = this.Currentuserservice.getAccts();
    this.LoginService.getTransactions(this.currentaccounts[0].acct_Id).subscribe(
          (data) => {
            this.currenttrans = data;
            console.log(data);
          });
    
  }



  goBudget() {
    this.router.navigate(['/budget']);
  }
}
