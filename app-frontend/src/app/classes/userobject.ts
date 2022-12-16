import { IUser } from './userinterface';

export class User implements IUser {
  user_ID: number;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  password: string;

  constructor(user: IUser) {
    this.user_ID = user.user_ID;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.address = user.address;
    this.password = user.password;
  }
}
