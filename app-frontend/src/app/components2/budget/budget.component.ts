import { Component, OnInit } from '@angular/core';
import { CurrentuserService } from '../../services/currentuser.service';
import { User } from '../../classes/userobject';
import { Account } from '../../classes/accountobject';
import { Transaction } from '../../classes/transactionobject';
import { Router } from '@angular/router';
import { LoginService } from '../../services/superservice.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  private currentuser = this.userService.getData();
  currentaccounts: Account[] = this.userService.getAccts();
  currentaccountIds: number[] = [];
  accounts: string[] = ["Checking", "Saving"];

  acctIncomes: number[] = [];
  acctExpense: number[] = [];
  constructor(private userService: CurrentuserService, private router: Router, private superService: LoginService) { }

  ngOnInit() {
    this.currentaccounts = this.userService.getAccts();
    this.currentuser = this.userService.getData();
    this.acctIncomes;
    this.acctExpense;

    this.currentaccounts.forEach(acct => {
    this.currentaccountIds.push(acct.acct_Id);
    });

    this.currentaccountIds.forEach(currId => {
    this.superService.getIncome(currId).subscribe(result => {
      this.acctIncomes.push(result);
    })
  });

  this.currentaccountIds.forEach(currId => {
    this.superService.getExpense(currId).subscribe(result => {
      this.acctExpense.push(result);
    })
  });
    
  }
  
  }
  