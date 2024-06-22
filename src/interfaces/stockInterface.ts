export interface StockResult {
    symbol?:string;
    LTP: number; 
    CH: {
      absolute: number; 
      percentage: string; 
    };
    currentUnits: number;
    soldUnits: number;
    investment: number;
    WACC: number; 
    soldValue: number;
    estimatedProfit: number;
    currentValue: number;
    dividend: number;
    todayGain: number; 
  }
  export default interface StockData{
    symbol:string;
    transcationtype:string;
    CH:number;
    quantity:number;
    purchasePrice?:number;
    sellingPrice?:number;
  }