import { ITransaction } from './transactioninterface';

export class Transaction implements ITransaction {
    ref_Id: number;
    src_acct: number;
    dst_acct: number;
    status: string;
    amount: number;

  constructor(ref_Id: number, src_acct: number, dst_acct: number, status: string, amount: number) {
    this.ref_Id = ref_Id;
    this.src_acct = src_acct;
    this.dst_acct = dst_acct;
    this.status = status;
    this.amount = amount;
  }
  
}