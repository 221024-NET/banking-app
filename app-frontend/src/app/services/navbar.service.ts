import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _changeNavBar = new BehaviorSubject<boolean>(false);
  changeNavBar$ = this._changeNavBar.asObservable();
  private _showFooter = new BehaviorSubject<boolean>(true);
  showFooter$ = this._showFooter.asObservable();
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
    this._showFooter.next(!value);
  }
}
