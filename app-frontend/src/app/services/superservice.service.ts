import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../classes/userobject';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Account } from '../classes/accountobject';
import { Transaction } from '../classes/transactionobject';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = "https://localhost:7218/api/";

  constructor(private http: HttpClient) { }

  public PostLogin(user: Object) {
    return this.http.post(this.url + "Users/login", user);
  }

  public PostAccount(account: Object) {
    return this.http.post(this.url + "Accounts", account);
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

  postTransaction(transaction: Object) {
    return this.http.post(this.url + "Transactions", transaction);
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
  }

}
