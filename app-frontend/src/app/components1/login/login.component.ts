import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/classes/userobject';
import { FormControl, FormGroup } from '@angular/forms';

// ! Include forms here
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  Users?: User[];
  formdata: any;

  constructor(private service: LoginService) {}

  ngOnInit(): void {

  }

  GetUsers() {
    console.log("Calling GetUsers()");
    // this.service.GetAllUsers().subscribe((data: User[]) => {this.Users = data});
    this.service.GetAllUsers().subscribe((data: User[]) => {
      console.log("Raw data: ");
      console.log(data);
      this.Users = data;
      console.log("Users array: ");
      console.log(this.Users);
    });
  }
}
