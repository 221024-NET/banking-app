import { IAccount } from './accountinterface';

export class Account implements IAccount {
    acct_Id: number;
    user_Id: number;
    type: string;
    balance?: number;

    constructor(account: IAccount){
        this.acct_Id = account.acct_Id;
        this.user_Id = account.user_Id;
        this.type = account.type;
        this.balance = account.balance;
    }
}
