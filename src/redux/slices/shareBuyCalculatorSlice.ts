"use client";
import { createSlice } from "@reduxjs/toolkit";
import { BuyShareResult } from "@/interfaces/shareBuyInterface";
const initialState: BuyShareResult = {
    total_amount: 0,
    borker_commission_amount: 0,
    SEBON_fee_amount: 0,
    DP_charge_amount: 0,
    total_payable_amount: 0,
    cost_price_per_share: 0
}

const buyShareSlice = createSlice({
    name: 'buy-share',
    initialState,
    reducers: {
        buyShare(state, action) {
            const { no_share_units, share_unit_price } = action.payload;
            const total_amount = no_share_units * share_unit_price;
            const DP_fee = 25;
            let broker_comission_percent = total_amount < 50000 ? 0.36 :
                total_amount < 500000 ? 0.33 :
                    total_amount < 2000000 ? 0.31 :
                        total_amount < 10000000 ? 0.27 : 0.24;
            // broker commission amount
            const borker_commission_amount = total_amount * broker_comission_percent;
            // SEBON fee amount
            const sebon_fee = total_amount * 0.015;
            // total pay amount with charge amount
            const total_payable_amount = total_amount + borker_commission_amount + sebon_fee + DP_fee;
            // cost price per share
            const cost_price_per_share = total_payable_amount / no_share_units;
            state.total_amount = total_amount;
            state.borker_commission_amount = borker_commission_amount;
            state.SEBON_fee_amount = sebon_fee;
            state.DP_charge_amount = DP_fee;
            state.total_payable_amount = total_payable_amount;
            state.cost_price_per_share = cost_price_per_share;

        }
    }
});
export default buyShareSlice.reducer;
export const buyShareAction = buyShareSlice.actions;
