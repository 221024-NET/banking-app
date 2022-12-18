import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  // TODO: Add this to dark mode?
  providedIn: 'root',
})
export class NavbarService {
  private _showNavbar = new BehaviorSubject<boolean>(true);
  showNavbar$ = this._showNavbar.asObservable();

  constructor() {}

  get showNavbar(): boolean {
    return this._showNavbar.getValue();
  }

  set showNavbar(value: boolean) {
    this._showNavbar.next(value);
  }
}

// TODO: Add this to currUser service when done
// import { NavbarService } from './navbar.service';
// Setter: this.navbarService.changeNavBar = false;
// @Injectable({
//   providedIn: 'root',
// })
// export class OtherService {
//   constructor(private navbarService: NavbarService) {}

//   doSomething() {
//     const changeNavBar = this.navbarService.changeNavBar;
//     // do something with the changeNavBar value
//   }
// }
