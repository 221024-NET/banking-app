import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/classes/userobject';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrentuserService } from 'src/app/services/currentuser.service';
import { Router } from '@angular/router';
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

  constructor(private service: RegisterService, private newuser: CurrentuserService, private router: Router){

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
      this.service.PostRegister(this.formUser).subscribe((data) => {this.User = data;})
      
      if(this.User.user_ID != null){
        this.router.navigateByUrl("/login")
      }
    
    }
  }

}
