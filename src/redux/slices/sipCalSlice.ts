'use client'
import { createSlice } from "@reduxjs/toolkit";
import { SIPOut } from "@/interfaces/sipInterface";
const initialState: SIPOut = {
    total_investment: 0,
    estimated_return: 0,
    estimated_total_return: 0
}

const sipCalculatorSlice = createSlice({
    name: 'sip-calculator',
    initialState,
    reducers: {
        sipCalculator(state, action) {
            let periodsPerYear: number = 0;
            let periodicRate: number = 0;
            const { investment_period_type, investment_amount, annual_return, total_investment_period } = action.payload;

            switch (investment_period_type) {
                case 'monthly':
                    periodsPerYear = 12;
                    periodicRate = annual_return / 12 / 100;
                    break;
                case 'quaterly':
                    periodsPerYear = 4;
                    periodicRate = annual_return / 4 / 100;
                    break;
                case 'semi_annually':
                    periodsPerYear = 2;
                    periodicRate = annual_return / 2 / 100;
                    break;
                case 'annually':
                    periodsPerYear = 1;
                    periodicRate = annual_return / 100;
                    break;
                default:
                    state.estimated_return = 0;
                    state.estimated_total_return = 0;
                    state.total_investment = 0;
                    return;
            }

            const totalPayments = periodsPerYear * total_investment_period;
            const total_investment_amount = investment_amount * totalPayments;

            const futureValue = investment_amount * ((Math.pow(1 + periodicRate, totalPayments) - 1) / periodicRate) * (1 + periodicRate);
            const total_gain = futureValue - total_investment_amount;

            state.total_investment = total_investment_amount;
            state.estimated_return = total_gain;
            state.estimated_total_return = futureValue;
        }
    }
});
export default sipCalculatorSlice.reducer;
export const sipActions = sipCalculatorSlice.actions;