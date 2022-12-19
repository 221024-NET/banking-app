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
  currentaccountIds: number[] = [this.currentaccounts[0].acct_Id, this.currentaccounts[1].acct_Id];
    
  // currentaccounts.forEach(currAcc => {
  //   currentaccountIds.push(currAcc.acct_Id)
  // });
  acctExpense: any;
  acctIncomes: number[] = [];

  // response = this.superService.getIncome(this.currentaccounts[0].acct_Id).subscribe(result => {
  //   this.acctIncomes = result;
  //   console.log(this.acctIncomes);
  // });
  response = this.currentaccountIds.forEach(currId => {
    this.superService.getIncome(currId).subscribe(result => {
      this.acctIncomes.push(result);
    })
  });
  

  constructor(private userService: CurrentuserService, private router: Router, private superService: LoginService) { }

  test(){
  }

  ngOnInit() {
    this.currentaccounts = this.userService.getAccts();
    this.currentuser = this.userService.getData();
    this.acctIncomes;
    
    // this.acctExpense = this.currentaccounts.forEach(acct => {this.superService.getExpense(acct)});
    // alert( this.currentaccounts.forEach(acct => {this.superService.getIncome(acct)}));
  }
  
  }
  