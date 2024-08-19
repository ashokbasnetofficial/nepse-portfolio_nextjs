export interface IStock {
  symbol: string;
  transactionDate: Date;
  companyName: string;
  purchasePrice: number;
  dividend?: number;
  quantity: number;
}
