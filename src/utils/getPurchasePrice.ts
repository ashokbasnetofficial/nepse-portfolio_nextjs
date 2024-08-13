export function get_Purchase_Price(
  share_Quantity: number,
  purchase_Price: number,
  broker_Comission_percent: number
) {
  const dp_charge = 25;
  let total_purchase_amount = share_Quantity * purchase_Price;
  const sebon_fee = total_purchase_amount * 0.00015;
  const broker_comission_amount =
    total_purchase_amount * broker_Comission_percent;
  return (
    total_purchase_amount + broker_comission_amount + sebon_fee + dp_charge
  );
}
