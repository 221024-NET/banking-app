export interface ITransaction{
    ref_Id: number
    src_acct: number;
    dst_acct: number;
    status: string;
    amount: number;
}