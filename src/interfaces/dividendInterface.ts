export default interface Dividend {
    share_units:number;
    cash_dividend?:number;
    bonus_share?:number;
    face_value:number;
  }
  export interface DividendSummary {
    cash_Amount:number;
    bonus_Share_Tax:number;
    cash_Amount_Tax:number;
    total_Payable_Tax:number;
    receivable:number;
  }
  