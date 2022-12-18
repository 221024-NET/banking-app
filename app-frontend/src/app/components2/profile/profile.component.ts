import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showError = false;

constructor (private router: Router){
}
  deleteAcc() {
    this.showError = !this.showError;
  }
  goBack(){
    this.router.navigateByUrl("dashboard");
  }
}
