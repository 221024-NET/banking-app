import { IAccount } from './accountinterface';

export class Account implements IAccount {
    acct_Id: number;
    user_Id: number;
    type: string;
    balance?: number;

  // constructor(acct_Id: number, user_Id: number,type: string, balance?: number) {
  //   this.acct_Id = acct_Id;
  //   this.user_Id = user_Id;
  //   this.type = type;
  //   this.balance = balance;
  // }
    constructor(account: IAccount){
        this.acct_Id = account.acct_Id;
        this.user_Id = account.user_Id;
        this.type = account.type;
        this.balance = account.balance;
    }

}
