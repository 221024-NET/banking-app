import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/superservice.service';
import { User } from '../../classes/userobject';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrentuserService } from '../../services/currentuser.service';
import { Router } from '@angular/router';
// import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../classes/accountobject';

// ! Include forms here

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  User!: any;
  formdata: any;
  formUser = new User(0, '', '', '', '', '');

  constructor(
    private service: LoginService,
    private Currentuser: CurrentuserService,
    private router: Router,
    // private Currentaccounts: AccountsService
  ) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  PostLogin(user: User) {
    if (!this.formdata.valid) {
      this.formdata.markAllAsTouched();
    } else {
      this.formUser.email = user.email;
      this.formUser.password = user.password;
      console.log(user.email);
      console.log(user.password);

      this.service.PostLogin(this.formUser).subscribe(
        (data) => {
          this.User = data;
          console.log(this.User.email);
          this.Currentuser.setData(this.User);
          this.service.GetAccounts(this.User.user_ID).subscribe(
            (data2) => {
              this.Currentuser.setAccts(data2);
              this.router.navigateByUrl('/dashboard');
            }
          )
        },
        (error) => {
          alert('Invalid email/password');
          console.log('Invalid email/password');
        }
      );
    }
  }
}