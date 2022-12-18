import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    url = "https://localhost:7218/api/";
  
    constructor(private http: HttpClient) { }
  
    public PostRegister(user: Object) {
      return this.http.post(this.url + "Users/register", user);
    }
  }