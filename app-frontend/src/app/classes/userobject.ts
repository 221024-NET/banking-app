import { IUser } from './userinterface';

export class User implements IUser {
  user_ID: number;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  password: string;

  constructor(user_ID: number, email: string, first_name: string, last_name: string, address: string, password: string) {
    this.user_ID = user_ID;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.address = address;
    this.password = password;
  }

}