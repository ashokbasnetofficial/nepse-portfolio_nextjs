import mongoose, { Document, Schema } from "mongoose";

interface IStock extends Document {
  symbol?: string;
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

const stockSchema = new Schema<IStock>({
  symbol: { type: String, required: false },
  LTP: { type: Number, required: true },
  CH: {
    absolute: { type: Number, required: true },
    percentage: { type: String, required: true },
  },
  currentUnits: { type: Number, required: true },
  soldUnits: { type: Number, required: true },
  investment: { type: Number, required: true },
  WACC: { type: Number, required: true },
  soldValue: { type: Number, required: true },
  estimatedProfit: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  dividend: { type: Number, required: true },
  todayGain: { type: Number, required: true },
});

export const Stock =
  mongoose.models?.Stock || mongoose.model<IStock>("Stock", stockSchema);
