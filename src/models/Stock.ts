import mongoose, { Document, Schema } from "mongoose";

interface IStock extends Document {
  symbol: string;
  transactionDate: Date;
  companyName: string;
  purchasePrice: number;
  dividend?: number;
  quantity: number;
}

const stockSchema = new Schema<IStock>({
  symbol: { type: String, required: true },
  transactionDate: { type: Date, required: true },
  companyName: { type: String, required: true },
  purchasePrice: { type: Number, required: true },
  dividend: { type: Number, required: false },
  quantity: { type: Number, required: true },
});

export const Stock =
  mongoose.models?.Stock || mongoose.model<IStock>("Stock", stockSchema);
