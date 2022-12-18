import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/classes/userobject';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrentuserService } from 'src/app/services/currentuser.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';
// ! Include forms here
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  User!: any;
  formdata: any;
  formUser = new User(0, "", "", "", "", "");

  constructor(private registerservice: RegisterService, private loginservice: LoginService, private newuser: CurrentuserService, private router: Router){

  }

  ngOnInit(): void{
    this.formdata = new FormGroup({
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      address: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
    })
  }

  PostRegister(user: User){

    if(!this.formdata.valid){
      this.formdata.markAllAsTouched();
    }
    else{
      this.formUser.first_name = user.first_name;
      this.formUser.last_name = user.last_name;
      this.formUser.address = user.address;
      this.formUser.email = user.email;
      this.formUser.password = user.password;
      this.registerservice.PostRegister(this.formUser).subscribe(
        (data) => {
          this.User = data;
          this.newuser.setData(this.User);
          this.router.navigateByUrl("/dashboard");
          },
        (error) =>{
          alert("Email exist already");
          console.log("Email exist already")
        })    
    }
    //this.loginservice.PostLogin(this.formUser).subscribe( (data) => {this.User = data});
    
  }

}
