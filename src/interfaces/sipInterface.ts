export interface SIPOut {
  total_investment: number;
  estimated_return: number;
  estimated_total_return: number;
  SIPBreakDown: SIPBreakDown[];
}
export interface SIPBreakDown {
  periods: number;
  amount: string;
  returns: string;
  balance: string;
}
export default interface SIP {
  investment_period_type: string;
  investment_amount: number;
  annual_return: number;
  total_investment_period: number;
}
