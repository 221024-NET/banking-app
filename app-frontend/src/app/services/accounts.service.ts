import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, map, Observable } from 'rxjs';
import { Account } from '../classes/accountobject';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  url = "https://localhost:7218/api/";

  constructor(private http: HttpClient, accounts: Account) { }


  public GetAccounts(id: number): Observable<Account[]> {
    return this.http
    .get<Account[]>(this.url + "Users/my-accounts/" + id)
    .pipe(map( (accounts: Account[]) => accounts.map(account => new Account(account))));
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}