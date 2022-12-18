import { Injectable } from '@angular/core';
import { User } from '../classes/userobject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {
  isloggedin = false;
  
  private currentuser = new User(0, "", "", "", "", "");

  constructor(private router: Router) { }

  setData(user: User){
    this.currentuser = user;
    this.isloggedin = true;
  }
  getData(): User{
    return this.currentuser;
  }
  logOut() {
    this.isloggedin = false;
    this.currentuser = new User(0, "", "", "", "", "");
    this.router.navigate(['/home']);
  }
}
