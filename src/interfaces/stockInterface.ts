export interface StockResult {
  symbol: string;
  LTP: number;
  CH: {
    absolute: number;
    percentage: number;
  };
  currentUnits: number;
  soldUnits: number;
  investment: number;
  WACC: number;
  soldValue: number;
  estimatedProfit: number;
  currentValue: number;
  dividend: number;
  todayGain?: number;
  todayLoss?: number;
  current_investment: number;
  profit: number;
  real_Gain: number;
  unrealGain: number;
  receiveable_Amount: number;
  transactions?: [StockTransaction];
}
export interface StockDetails {
  currentUnits: number;
  soldUnits: number;
  investment: number;
  WACC: number;
  soldValue: number;
  estimatedProfit: number;
  currentValue: number;
  dividend: number;
  todayGain: number;
  current_investment: number;
  real_Gain: number;
  unrealGain: number;
  receiveable_Amount: number;
  profit: number;
}

export interface StockTransaction {
  transactionType: string;
  transactionDate: string;
  quantity: number;
  price: number;
  dividend: number | null;
  _id: string;
}

export default interface StockData {
  _id: string;
  symbol: string;
  companyName: string;
  LTP: number;
  changePercent: number;
  priceDifference: number;
  previousPrice: number;
  avgPurchasePrice: number;
  totalQty: number;
  firstTranscation: Date;
  dividend: number;
}
