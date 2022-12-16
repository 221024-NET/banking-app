import { Injectable } from '@angular/core';
import { User } from '../classes/userobject';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {

  private currentuser = new User(0, "", "", "", "", "");

  constructor() { }

  setData(user: User){
    this.currentuser = user;
  }
  getData(): User{
    return this.currentuser;
  }
}
