import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../classes/userobject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../classes/accountobject';
import { Transaction } from '../classes/transactionobject';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = "https://localhost:7218/api/";
  num: number = 0;

  constructor(private http: HttpClient) { }
  public PostLogin(user: Object) {
    return this.http.post(this.url + "Users/login", user);
  }
  public GetAccounts(id: number): Observable<Account[]> {
    return this.http
    .get<Account[]>(this.url + "Users/my-accounts/" + id)
    .pipe(map( (accounts: Account[]) => accounts.map(account => new Account(account))));
  }

  getTransactions(acct_Id: number): Observable<Transaction[]>{
    return this.http
    .get<Transaction[]>(this.url + "Transactions/account/all/" + acct_Id)
    .pipe(map( (transactions: Transaction[]) => transactions.map(transaction => new Transaction(transaction))));
  }



  getIncome(acct_Id: number): Observable<number> {
    return this.http.get<number>(this.url + "Accounts/my-income/" + acct_Id);
  }
      
    
    getExpense(acct_Id: number): Observable<number>{
      return this.http.get<number>(this.url + "Accounts/my-expense/" + acct_Id);
        
      }
    
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
  }