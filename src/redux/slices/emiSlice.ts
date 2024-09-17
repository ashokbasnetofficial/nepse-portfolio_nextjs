"use client";
import { calculateEMIBreakdown } from "@/utils/emiCalculator";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Emblema_One } from "next/font/google";
interface EMIBreakDown {
  principal: string;
  interest: string;
  balance: string;
  month: string;
}
interface EMISummary {
  total_interest: number;
  total_payment: number;
  monthly_emi: number;
  EMIBreakDown: EMIBreakDown[];
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
  EMIBreakDown: [],
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
      const { breakdown } = calculateEMIBreakdown(
        loan_amount,
        monthly_rate,
        tenure,
        emi
      );
      state.monthly_emi = emi;
      state.total_payment = total_payment;
      state.total_interest = total_interest;
      state.EMIBreakDown = breakdown;
    },
  },
});

export const emiActions = emiSlice.actions;
export default emiSlice.reducer;
