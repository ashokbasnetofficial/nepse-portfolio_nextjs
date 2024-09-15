"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StockData, { StockResult } from "@/interfaces/stockInterface";
import getTaxPercentage from "@/utils/getTaxPercentage";
import { stockCalculator } from "@/utils/stockCalculator";
import getBrokerCommission from "@/utils/calculateBrokerCommision";
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
          state[index].symbol = stock.symbol;
        } else {
          const purchase_Price = stock.avgPurchasePrice;
          const quantity = stock.totalQty;
          const LTP = stock.LTP;
          const investment = quantity * purchase_Price;
          const currentValue = stock.totalQty * LTP;
          const dividendSum = stock.dividend;
          const taxPercentage = getTaxPercentage(stock.firstTranscation);
          const {
            total_investment,
            total_receive_amount,
            profit_or_loss,
            price_per_share,
            dividend,
          } = stockCalculator(
            purchase_Price,
            quantity,
            LTP,
            taxPercentage,
            dividendSum
          );
          state.push({
            symbol: stock.symbol,
            LTP: stock.LTP,
            CH: {
              absolute: stock.priceDifference,
              percentage: stock.changePercent,
            },
            currentUnits: stock.totalQty,
            soldUnits: 0,
            investment: investment,
            WACC: stock.avgPurchasePrice,
            soldValue: 0,
            estimatedProfit: profit_or_loss,
            currentValue: currentValue,
            dividend: dividend,
            todayGain: 0,
            current_investment: investment,
            real_Gain: 0,
            unrealGain: profit_or_loss,
            receiveable_Amount: total_receive_amount,
            profit: 0,
          });
        }
      });
    },
  },
});

export default portfolioSlice.reducer;
export const portfolioAction = portfolioSlice.actions;
