import { SIPBreakDown } from "@/interfaces/sipInterface";
export const calculateSIPBreakdown = (
  investment_period_type: "monthly" | "quaterly" | "semi_annually" | "annually",
  investment_amount: number,
  annual_return: number,
  total_investment_period: number
): SIPBreakDown[] => {
  let periodsPerYear: number;
  let periodicRate: number;

  // Determine the periods per year and the periodic rate
  switch (investment_period_type) {
    case "monthly":
      periodsPerYear = 12;
      periodicRate = annual_return / 12 / 100;
      break;
    case "quaterly":
      periodsPerYear = 4;
      periodicRate = annual_return / 4 / 100;
      break;
    case "semi_annually":
      periodsPerYear = 2;
      periodicRate = annual_return / 2 / 100;
      break;
    case "annually":
      periodsPerYear = 1;
      periodicRate = annual_return / 100;
      break;
    default:
      throw new Error("Invalid investment period type");
  }
  const totalPayments = periodsPerYear * total_investment_period;
  const breakdown: SIPBreakDown[] = [];
  let currentBalance = 0;
  for (let period = 1; period <= totalPayments; period++) {
    const returns = currentBalance * periodicRate;
    currentBalance += investment_amount + returns;

    breakdown.push({
      periods: period,
      amount: investment_amount.toString(),
      returns: returns.toFixed(1),
      balance: currentBalance.toFixed(1),
    });
  }

  return breakdown;
};
