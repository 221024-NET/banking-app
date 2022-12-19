import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/userobject';
import { CurrentuserService } from '../../services/currentuser.service';
import { LoginService } from 'app/services/superservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent{
  
  lgs : LoginService;
  showError = false;
  Cuser : CurrentuserService;
  user : User;

  constructor(private CurrentUser : CurrentuserService, private loginserv : LoginService)
  {
    this.lgs = loginserv;
    this.Cuser = CurrentUser;
    this.user = this.Cuser.getData();
  };

  updateUser() {
    var currpass = (<HTMLInputElement>document.getElementById("user-curr-pw")).value;
    var newpass = (<HTMLInputElement>document.getElementById("user-new-pw")).value;
    var newconf = (<HTMLInputElement>document.getElementById("user-conf-pw")).value;
    
    // ! If the user wants to change anything, they better be remembering their password
    if (currpass != this.user.password) {
      alert("You got your password wrong");
      return;
    }
    
    // ! They got their own password right, so let's check if they're updating it
    if (newpass){
      if (newpass != newconf)
      {
        alert("Your new password and confirmation do not match.");
        return;
      }
      this.user.password = newpass;
    }

    // ! Update the current user and post?
    this.Cuser.setData(this.user);
    //TODO: Actually call the HTTP Put for the user. Updating the current user works
    //    So I just need to put now
    this.loginserv.PutUser(this.user).subscribe(
      result => {console.log(`Result ${result}`)},
      err => (console.log(`Error: ${err}`))
    );
  }

  deleteAcc() {
    this.showError = !this.showError;
  }
}
