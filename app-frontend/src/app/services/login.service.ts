import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../classes/userobject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = "https://localhost:7218/api/";

  constructor(private http: HttpClient) { }

  public PostLogin(user: Object) {
    return this.http.post(this.url + "Users/login", user);
  }
}