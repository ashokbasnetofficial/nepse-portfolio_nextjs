import { get_Purchase_Price } from "@/utils/getPurchasePrice";
function getBrokerCommission(total_amount: number) {
  let broker_comission_percent: number;
  if (total_amount < 50000) {
    broker_comission_percent = 0.0036;
  } else if (total_amount < 500000) {
    broker_comission_percent = 0.0033;
  } else if (total_amount < 2000000) {
    broker_comission_percent = 0.0031;
  } else if (total_amount < 10000000) {
    broker_comission_percent = 0.0027;
  } else {
    broker_comission_percent = 0.0024;
  }
  return broker_comission_percent;
}
export function stockCalculator(
  purchasePrice: number,
  quantity: number,
  currentPrice: number,
  capital_gain_tax: number,
  transcation_type: string
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
  if (transcation_type === "secondary buy")
    total_investment = get_Purchase_Price(
      quantity,
      purchasePrice,
      broker_comission_percent
    );
  const total_profit_before_tax = total_amount_without_tax - total_investment;

  if (total_profit_before_tax > 0) {
    total_capital_gain_tax = total_profit_before_tax * (capital_gain_tax / 100);
  }
  console.log(total_capital_gain_tax);
  let total_receive_amount = total_amount_without_tax - total_capital_gain_tax;
  let profit_loss = total_receive_amount - total_investment;
  let price_per_share = purchasePrice / quantity;
  return {
    total_investment,
    total_receive_amount,
    profit_loss,
    price_per_share,
  };
}
