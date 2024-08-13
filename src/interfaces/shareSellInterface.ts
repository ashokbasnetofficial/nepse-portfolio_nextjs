export default interface shareSellSummary {
  investorType: string;
  totalAmount: number;
  commission: number;
  sebonFee: number;
  dpCharge: number;
  totalAmountReceivable: number;
  capitalGainTax: number;
  profitLoss: number;
}
export interface ShareSell {
  share_Quantity: number;
  purchase_Price: number;
  selling_Price: number;
  invest_Type: string;
  capital_gain_tax: number;
}
