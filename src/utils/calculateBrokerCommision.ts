export default function getBrokerCommission(total_amount: number) {
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
