import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../classes/userobject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../classes/accountobject';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = "https://localhost:7218/api/";

  constructor(private http: HttpClient) { }

  public PostLogin(user: Object) {
    return this.http.post(this.url + "Users/login", user);
  }
 public GetAccounts(id: number): Observable<Account[]> {
    return this.http
    .get<Account[]>(this.url + "Users/my-accounts/" + id)
    .pipe(map( (accounts: Account[]) => accounts.map(account => new Account(account))));
  }
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }

 

}