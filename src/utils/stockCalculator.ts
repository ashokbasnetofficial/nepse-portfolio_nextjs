import { get_Purchase_Price } from "@/utils/getPurchasePrice";
import getBrokerCommission from "./calculateBrokerCommision";
export function stockCalculator(
  purchasePrice: number,
  quantity: number,
  currentPrice: number,
  capital_gain_tax: number,
  dividend: number
) {
  const total_amount = quantity * currentPrice;
  let total_investment = quantity * purchasePrice;
  let total_capital_gain_tax = 0;
  const broker_comission_percent = getBrokerCommission(total_amount);
  let total_broker_comisson = broker_comission_percent * total_amount;
  let sebon_fee = total_amount * 0.00015;
  let dp_charge = 25;
  let total_amount_without_tax =
    total_amount - (dp_charge + sebon_fee + total_broker_comisson);
  // total_investment = get_Purchase_Price(
  //   quantity,
  //   purchasePrice,
  //   broker_comission_percent
  // );
  //profit or loss before tax
  const total_profit_before_tax = total_amount_without_tax - total_investment;
  // tax evaluate if profit
  if (total_profit_before_tax > 0) {
    total_capital_gain_tax = total_profit_before_tax * (capital_gain_tax / 100);
  }
  let total_receive_amount =
    total_amount_without_tax - total_capital_gain_tax + dividend;
  let profit_or_loss = total_receive_amount - total_investment;
  let price_per_share = purchasePrice / quantity;
  return {
    total_investment,
    total_receive_amount,
    profit_or_loss,
    price_per_share,
    dividend,
  };
}
