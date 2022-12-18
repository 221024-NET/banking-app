import { Injectable, NgModule } from '@angular/core';
import { User } from '../classes/userobject';
import { Router } from '@angular/router';
import { Account } from '../classes/accountobject';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {
  isloggedin = false;
  
  private currentuser = new User(0, "", "", "", "", "");
  private currentaccounts: Account[] = [];

  constructor(private router: Router) { }

  setData(user: User){
    this.currentuser = user;
    this.isloggedin = true;
    // this.currentaccounts = this.setDataHelper();
  }
  // setDataHelper(): Account[]{
  //   this.accountservice.GetAccounts(this.currentuser).subscribe((data: Account[]) =>{
  //     return data;
  //   })
  //   let empty: Account[] = [];
  //   return empty;
  // }


  setAccts(accounts: Account[]){
    this.currentaccounts = accounts;
  }
  getData(): User{
    return this.currentuser;
  }
  logOut() {
    this.isloggedin = false;
    this.currentuser = new User(0, "", "", "", "", "");
    this.router.navigate(['/home']);
  }

  getnumAcct(){
    return this.currentaccounts.length;
  }
}