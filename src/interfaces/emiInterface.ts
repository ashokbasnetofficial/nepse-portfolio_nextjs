export default interface EMIData {
  loan_amount: number;
  interest_rate: number;
  tenure: number;
}
export interface EMIBreakDown {
  principal: string;
  interest: string;
  balance: string;
  month: string;
}
export interface EMISummary {
  total_interest: number;
  total_payment: number;
  monthly_emi: number;
  EMIBreakDown: EMIBreakDown[];
}
