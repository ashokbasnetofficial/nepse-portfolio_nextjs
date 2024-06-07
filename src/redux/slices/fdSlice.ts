"use client";
import FixedDepositData, { FDSummary } from "@/interfaces/fdInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: FDSummary = {
    total_interest: 0,
    total_return_amount: 0

}
const fdCalculatorSlice = createSlice({
    name: 'fd-calculator',
    initialState,
    reducers: {
        fdCalculator(state, action: PayloadAction<FixedDepositData>) {
            const { principal_amount, interest_rate, tenure, compound_type } = action.payload;
            let compound_time_per_year = 0;
            if (compound_type === 'monthly') {
                compound_time_per_year = 12;

            }
            else if (compound_type === 'quarterly') {
                compound_time_per_year = 4;
            }

            else if (compound_type === 'semi-annual') {
                compound_time_per_year = 2;

            }
            else if (compound_type === 'annual') {
                compound_time_per_year = 1;

            }
            let principal_increment_rate = 1 + (interest_rate * compound_time_per_year) / 100 * compound_time_per_year;
            let compound_interest = principal_amount * Math.pow(principal_increment_rate, (compound_time_per_year * tenure));
            let total_interest = compound_interest - principal_amount;
            state.total_interest = total_interest
            state.total_return_amount = compound_interest;

        }
    }
})