import { ITransaction } from './transactioninterface';

export class Transaction implements ITransaction {
    ref_Id: number;
    src_acct: number;
    dst_acct: number;
    status: string;
    amount: number;

  constructor(ITransaction: ITransaction) {
    this.ref_Id = ITransaction.ref_Id;
    this.src_acct = ITransaction.src_acct;
    this.dst_acct = ITransaction.dst_acct;
    this.status = ITransaction.status;
    this.amount = ITransaction.amount;
  }

  Add(trans: Transaction){
    this.ref_Id = trans.ref_Id;
    this.src_acct = trans.src_acct;
    this.dst_acct = trans.dst_acct;
    this.status = trans.status;
    this.amount = trans.amount;
  }

}