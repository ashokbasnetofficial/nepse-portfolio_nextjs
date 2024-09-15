import mongoose, { Document, Schema } from "mongoose";
interface ITransaction extends Document {
  transactionType:
    | "buy"
    | "sell"
    | "dividend"
    | "bonus_share"
    | "ipo"
    | "fpo"
    | "right_share"
    | "auction";
  transactionDate: Date;
  quantity?: number;
  price?: number;
  dividend?: number;
}

// Define the Stock interface
interface IStock extends Document {
  symbol: string;
  companyName: string;
  avgPurchasePrice: number;
  totalQty: number;
  transactions: ITransaction[];
  addTransaction(transaction: ITransaction): Promise<void>;
}

// Transaction Schema
const transactionSchema = new Schema<ITransaction>({
  transactionType: {
    type: String,
    required: true,
    enum: [
      "buy",
      "sell",
      "dividend",
      "bonus_share",
      "ipo",
      "fpo",
      "right_share",
      "auction",
    ],
  },
  transactionDate: { type: Date, required: true },
  quantity: { type: Number, required: false },
  price: { type: Number, required: false },
  dividend: { type: Number  , required: false },
});

// Stock Schema
const stockSchema = new Schema<IStock>({
  symbol: { type: String, required: true },
  companyName: { type: String, required: true },
  avgPurchasePrice: { type: Number, required: true },
  totalQty: { type: Number, required: true },
  transactions: [transactionSchema],
});
export const Stock =
  mongoose.models?.Stock || mongoose.model<IStock>("Stock", stockSchema);
