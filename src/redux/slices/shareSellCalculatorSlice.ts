import shareSellSummary, { shareSell } from "@/interfaces/shareSellInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: shareSellSummary = {
    investorType: '',
    totalAmount: 0,
    commission: 0,
    sebonFee: 0,
    dpCharge: 0,
    totalAmountReceivable: 0,
    capitalGainTax: 0,
    profitLoss: 0
}
const shareSellSlice = createSlice({
    name: 'sell-share',
    initialState,
    reducers: {
        sellShare(state, action: PayloadAction<shareSell>) {
            const { share_Quantity, purchase_Price, selling_Price, invest_Type, capital_gain_tax } = action.payload;
            const total_sale_amount = share_Quantity * selling_Price;
            // broker commission percentage 
            let broker_comission_percent = total_sale_amount < 50000 ? 0.36 :
                total_sale_amount < 500000 ? 0.33 :
                    total_sale_amount < 2000000 ? 0.31 :
                        total_sale_amount < 10000000 ? 0.27 : 0.24;

            let total_broker_comisson = broker_comission_percent * total_sale_amount;
            let sebon_fee = total_sale_amount * 0.00015;
            let dp_charge = 25;
            let total_capital_gain = total_sale_amount - (share_Quantity * purchase_Price)
            let total_capital_gain_tax = total_capital_gain * capital_gain_tax;
            let total_receive_amount = total_sale_amount - (total_broker_comisson + total_capital_gain_tax + sebon_fee + dp_charge);
            let total_purchase_price = share_Quantity * purchase_Price
            let total_payable_price = total_purchase_price + (total_purchase_price * broker_comission_percent + dp_charge + total_purchase_price * 0.015);
            let profit_loss = total_receive_amount - total_payable_price;
            state.investorType = invest_Type;
            state.totalAmount = total_sale_amount;
            state.commission = total_broker_comisson;
            state.sebonFee = sebon_fee;
            state.dpCharge = dp_charge;
            state.totalAmountReceivable = total_receive_amount;
            state.capitalGainTax = total_capital_gain_tax;
            state.profitLoss = profit_loss
        }
    }
})
export default shareSellSlice.reducer;
export const sellActions = shareSellSlice.actions;