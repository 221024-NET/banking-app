export interface ITransaction{
    ref_Id: number
    src_acct: number | null;
    dst_acct: number | null;
    status: string;
    amount: number;
}
