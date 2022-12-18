import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // * when the user clicks the Submit button, the login process will be performed and, if the login is successful, the user will be redirected to the desired routerLink.
  constructor() {}
  // constructor(private loginService: LoginService, private router: Router) {}
  // TODO: add
  // submit() {
  //   // perform login process here, including setting the isLoggedIn value in the LoginService
  //   this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
  //     if (isLoggedIn) {
  //       this.router.navigate(['/home']);
  //     }
  //   });
  // }
}
