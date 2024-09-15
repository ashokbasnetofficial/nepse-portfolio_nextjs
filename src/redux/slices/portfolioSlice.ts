"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StockData, { StockResult } from "@/interfaces/stockInterface";
import getTaxPercentage from "@/utils/getTaxPercentage";
import { stockCalculator } from "@/utils/stockCalculator";
// Initialize the state as an array of StockResult
const initialState: StockResult[] = [];

const portfolioSlice = createSlice({
  name: "portfolio-tracker",
  initialState,
  reducers: {
    // Set the stocks but only update the symbol in each StockResult
    setStocks(state, action: PayloadAction<StockData[]>) {
      const data = action.payload;
      data.forEach((stock, index) => {
        if (state[index]) {
          // If the stock already exists in the state, update only the symbol
          state[index].symbol = stock.symbol;
          
        } else {
          // If it's a new stock, push a new result with only the symbol filled
          state.push({
            symbol: stock.symbol,
            LTP: stock.LTP,
            CH: {
              absolute: stock.priceDifference,
              percentage: stock.changePercent,
            },
            currentUnits: stock.totalQty,
            soldUnits: 0,
            investment: stock.totalQty * stock.avgPurchasePrice,
            WACC: stock.avgPurchasePrice,
            soldValue: 0,
            estimatedProfit: 0,
            currentValue: 0,
            dividend: 0,
            todayGain: 0,
            current_investment: 0,
            real_Gain: 0,
            unrealGain: 0,
            receiveable_Amount: 0,
            profit: 0,
          });
        }
      });
    },
  },
});

export default portfolioSlice.reducer;
export const portfolioAction = portfolioSlice.actions;
