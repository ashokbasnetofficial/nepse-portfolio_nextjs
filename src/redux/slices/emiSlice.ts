"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EMISummary {
  total_interest: number;
  total_payment: number;
  monthly_emi: number;
}

interface EMIData {
  loan_amount: number;
  interest_rate: number;
  tenure: number;
}

// Initial state
const initialState: EMISummary = {
  total_interest: 0,
  total_payment: 0,
  monthly_emi: 0,
};

const emiSlice = createSlice({
  name: "emi",
  initialState,
  reducers: {
    calculateEmi(state, action: PayloadAction<EMIData>) {
      const { loan_amount, interest_rate, tenure } = action.payload;
      const monthly_rate = interest_rate / (12 * 100);
      const emi =
        (loan_amount * monthly_rate * Math.pow(1 + monthly_rate, tenure)) /
        (Math.pow(1 + monthly_rate, tenure) - 1);
      const total_payment = emi * tenure;
      const total_interest = total_payment - loan_amount;
      state.monthly_emi = emi;
      state.total_payment = total_payment;
      state.total_interest = total_interest;
    },
  },
});

export const emiActions = emiSlice.actions;
export default emiSlice.reducer;
