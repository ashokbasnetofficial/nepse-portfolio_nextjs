"use client";
import shareSellSummary, { ShareSell } from "@/interfaces/shareSellInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get_Purchase_Price } from "@/utils/getPurchasePrice";
const initialState: shareSellSummary = {
  investorType: "",
  totalAmount: 0,
  commission: 0,
  sebonFee: 0,
  dpCharge: 0,
  totalAmountReceivable: 0,
  capitalGainTax: 0,
  profitLoss: 0,
};
// purchase price

const shareSellSlice = createSlice({
  name: "sell-share",
  initialState,
  reducers: {
    sellShare(state, action: PayloadAction<ShareSell>) {
      const {
        share_Quantity,
        purchase_Price,
        selling_Price,
        invest_Type,
        capital_gain_tax,
      } = action.payload;
      const total_sale_amount = share_Quantity * selling_Price;
      let total_capital_gain_tax = 0;
      // broker commission percentage
      let broker_comission_percent: number;
      if (total_sale_amount < 50000) {
        broker_comission_percent = 0.0036;
      } else if (total_sale_amount < 500000) {
        broker_comission_percent = 0.0033;
      } else if (total_sale_amount < 2000000) {
        broker_comission_percent = 0.0031;
      } else if (total_sale_amount < 10000000) {
        broker_comission_percent = 0.0027;
      } else {
        broker_comission_percent = 0.0024;
      }

      let total_broker_comisson = broker_comission_percent * total_sale_amount;
      let sebon_fee = total_sale_amount * 0.00015;
      let dp_charge = 25;
      let total_amount_without_tax =
        total_sale_amount - (dp_charge + sebon_fee + total_broker_comisson);
      const total_purchase_Price = get_Purchase_Price(
        share_Quantity,
        purchase_Price,
        broker_comission_percent
      );
      const total_profit_before_tax =
        total_amount_without_tax - total_purchase_Price;

      if (total_profit_before_tax > 0) {
        total_capital_gain_tax =
          total_profit_before_tax * (capital_gain_tax / 100);
      }
      console.log(total_capital_gain_tax);
      let total_receive_amount =
        total_amount_without_tax - total_capital_gain_tax;
      let profit_loss = total_receive_amount - total_purchase_Price;
      state.investorType = invest_Type;
      state.totalAmount = total_sale_amount;
      state.commission = total_broker_comisson;
      state.sebonFee = sebon_fee;
      state.dpCharge = dp_charge;
      state.capitalGainTax = total_capital_gain_tax;
      state.totalAmountReceivable = total_receive_amount;
      state.profitLoss = profit_loss;
    },
  },
});
export default shareSellSlice.reducer;
export const sellActions = shareSellSlice.actions;
