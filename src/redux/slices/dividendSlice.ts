"use client";
import Dividend, { DividendSummary } from "@/interfaces/dividendInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
const initialState: DividendSummary = {
  cash_Amount: 0,
  bonus_Share_Tax: 0,
  cash_Amount_Tax: 0,
  total_Payable_Tax: 0,
  receivable: 0,
};
const dividendSlice = createSlice({
  name: "dividend",
  initialState,
  reducers: {
    calculateDividend(state, action: PayloadAction<Dividend>) {
      const { share_units, cash_dividend, bonus_share, face_value } =
        action.payload;
      let total_bonus = 0;
      let total_bonus_tax = 0;
      let total_cash_dividend = 0;
      let total_cash_dividend_tax = 0;
      if (typeof bonus_share == "number") {
        total_bonus = share_units * (bonus_share / 100);
        total_bonus_tax = total_bonus * face_value * 0.05;
      }
      if (typeof cash_dividend == "number") {
        total_cash_dividend = share_units * (cash_dividend / 100) * face_value;
        total_cash_dividend_tax = total_cash_dividend * 0.05;
      }
      state.cash_Amount = total_cash_dividend;
      state.cash_Amount_Tax = total_cash_dividend_tax;
      state.receivable = total_bonus;
      state.bonus_Share_Tax = total_bonus_tax;
      state.total_Payable_Tax = total_bonus_tax + total_cash_dividend_tax;
    },
  },
});

export const dividendActions = dividendSlice.actions;
export default dividendSlice.reducer;
