import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/classes/userobject';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrentuserService } from 'src/app/services/currentuser.service';
import { Router } from '@angular/router';

// ! Include forms here
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  User!: any;
  formdata: any;
  formUser = new User(0, "", "", "", "", "");


  constructor(private service: LoginService, private Currentuser: CurrentuserService, private router: Router) {

  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }
  PostLogin(user: User){
    

    if(!this.formdata.valid){
      this.formdata.markAllAsTouched();
    }
    else{
      this.formUser.email = user.email;
      this.formUser.password = user.password;
      this.service.PostLogin(this.formUser).subscribe((data) =>{ this.User = data;})

      this.Currentuser.setData(this.User);

      if(this.User.user_ID != null){
        this.router.navigateByUrl("/");
      }
    }
  }
}