"use client";
import EMIData, { EMISummary } from "@/interfaces/emiInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: EMISummary = {
    total_interest: 0,
    total_payment: 0,
    monthly_emi: 0

}
const emiSlice = createSlice({
    name: 'emi',
    initialState,
    reducers: {
        calculateEmi(state, action: PayloadAction<EMIData>) {
            const { loan_amount, interest_rate, tenure } = action.payload;
            const monthly_interest_rate = interest_rate / 100 / 12;
            const monthly_emi = loan_amount * monthly_interest_rate / (1 - Math.pow(1 + monthly_interest_rate, -tenure));
            const total_interest = monthly_emi * tenure - loan_amount;
            const total_payment = monthly_emi * tenure;
            state.total_interest = total_interest;
            state.total_payment = total_payment;
            state.monthly_emi = monthly_emi;
        }
    }

});

export default emiSlice.reducer;
export const emiActions = emiSlice.actions; 