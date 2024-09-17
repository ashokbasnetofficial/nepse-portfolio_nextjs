export const calculateEMIBreakdown = (
  principal: number,
  monthlyInterestRate: number,
  tenureInMonths: number,
  EMI: number
) => {
  let breakdown = [];
  let outstandingPrincipal = principal;
  let currentDate = new Date();
  for (let i = 0; i < tenureInMonths; i++) {
    const interestComponent = outstandingPrincipal * monthlyInterestRate;
    const principalComponent = EMI - interestComponent;
    outstandingPrincipal -= principalComponent;

    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    breakdown.push({
      month: `${monthName} ${year}`, // Use real month name and year
      principal: principalComponent.toFixed(1),
      interest: interestComponent.toFixed(1),
      balance: outstandingPrincipal.toFixed(1),
    });

    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return {
    breakdown,
  };
};
