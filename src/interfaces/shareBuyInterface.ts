export default interface ShareBuy {
  no_share_units: number;
  share_unit_price: number;
}
export interface BuyShareResult {
  total_amount: number;
  borker_commission_amount: number;
  SEBON_fee_amount: number;
  DP_charge_amount: number;
  total_payable_amount: number;
  cost_price_per_share: number;
}
