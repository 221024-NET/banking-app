import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../classes/accountobject';
import { Transaction } from '../../classes/transactionobject';
import { CurrentuserService } from '../../services/currentuser.service';
import { LoginService } from '../../services/superservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private userService: CurrentuserService, private router: Router, private superService: LoginService) { }

  currentaccounts: Account[] = this.userService.getAccts();
  currentaccountIds: number[] = [];
  response = this.currentaccounts.forEach(acct => {
    this.currentaccountIds.push(acct.acct_Id);
    });
  userTransactions: Transaction[] = [];
  response1 = this.superService.getTransactions(this.currentaccountIds[0]).subscribe((data) =>
  {

    this.userTransactions = data;
    console.log("Within the subscribe: " + this.userTransactions[0].amount);
  });
  

  ngOnInit() {
    console.log("Outside the subscribe: " + this.userTransactions[0].amount);
    this.userTransactions
    

  }

}
