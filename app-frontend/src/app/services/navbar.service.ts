import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _changeNavBar = new BehaviorSubject<boolean>(true);
  changeNavBar$ = this._changeNavBar.asObservable();
  showNavbar$: Observable<boolean>;

  constructor() {
    this.showNavbar$ = this.changeNavBar$.pipe(
      map((changeNavBar) => {
        return !changeNavBar;
      })
    );
  }

  get changeNavBar(): boolean {
    return this._changeNavBar.getValue();
  }

  set changeNavBar(value: boolean) {
    this._changeNavBar.next(value);
  }
}
