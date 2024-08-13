"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StockData, { StockResult } from "@/interfaces/stockInterface";
const initialState: StockResult = {
  symbol: "",
  LTP: 0,
  CH: {
    absolute: 0,
    percentage: "",
  },
  currentUnits: 0,
  soldUnits: 0,
  investment: 0,
  WACC: 0,
  soldValue: 0,
  estimatedProfit: 0,
  currentValue: 0,
  dividend: 0,
  todayGain: 0,
};
const portfolioSlice = createSlice({
  name: "portfolio-tracker",
  initialState,
  reducers: {
    addNewStock(state, action: PayloadAction<StockData>) {
      const { symbol, transcationtype, quantity, purchasePrice, sellingPrice } =
        action.payload;
      if (transcationtype.toLocaleLowerCase().trim() === "ipo") {
      }
    },
  },
});
