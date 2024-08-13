"use client";
import SIPForm from "@/components/SIPForm";
import classes from "../investmentTools.module.css";
import SellShareForm from "@/components/SellShareForm";
import BuyShareForm from "@/components/BuyShareForm";
import EMIForm from "@/components/EMIForm";
import FDForm from "@/components/FDForm";
import { useSelector } from "react-redux";
import shareSellSummary from "@/interfaces/shareSellInterface";
import { BuyShareResult } from "@/interfaces/shareBuyInterface";
import { EMISummary } from "@/interfaces/emiInterface";
import { FDSummary } from "@/interfaces/fdInterface";
import { SIPOut } from "@/interfaces/sipInterface";
import { resultLabels } from "@/utils/calculatorResultLabel";
import { formatNumber } from "@/utils/numFormatter";
import Error404 from "@/components/UI/Error";
import DividendForm from "@/components/DividentForm";
import { DividendSummary } from "@/interfaces/dividendInterface";
const InvestmentToolsCalculator = ({
  params,
}: {
  params: { investmenttools_id: string };
}) => {
  const sell_share_result: shareSellSummary = useSelector(
    (state: any) => state.sell
  );
  const buy_share_result: BuyShareResult = useSelector(
    (state: any) => state.buy
  );
  const emi_result: EMISummary = useSelector((state: any) => state.emi);
  const fd_result: FDSummary = useSelector((state: any) => state.fd);
  const sip_result: SIPOut = useSelector((state: any) => state.sip);
  const dividend_result: DividendSummary = useSelector(
    (state: any) => state.dividend
  );
  // back router
  const routerHandler = () => {
    window.history.back();
  };
  const { investmenttools_id } = params;
  const formComponents: any = {
    "sip-calculator": SIPForm,
    "share-buy-calculator": BuyShareForm,
    "share-sell-calculator": SellShareForm,
    "loan-calculator": EMIForm,
    "dividend-calculator": DividendForm,
    "fd-calculator": FDForm,
  };
  // result store
  const resultData: any = {
    "sip-calculator": {
      total_investment: sip_result.total_investment,
      estimated_return: sip_result.estimated_return,
      estimated_total_return: sip_result.estimated_total_return,
    },
    "share-buy-calculator": {
      total_amount: buy_share_result.total_amount,
      dp_charge: buy_share_result.DP_charge_amount,
      sebon_fee: buy_share_result.SEBON_fee_amount,
      borker_commission: buy_share_result.borker_commission_amount,
      total_payable_amount: buy_share_result.total_payable_amount,
      cost_price_per_share: buy_share_result.cost_price_per_share,
    },
    "share-sell-calculator": {
      investor_type: sell_share_result.investorType,
      total_amount: sell_share_result.totalAmount,
      broker_comission: sell_share_result.commission,
      sebon_fee: sell_share_result.sebonFee,
      dp_charge: sell_share_result.dpCharge,
      capital_gain_tax: sell_share_result.capitalGainTax,
      total_receiveable: sell_share_result.totalAmountReceivable,
      total_profit_loss: sell_share_result.profitLoss,
    },
    "loan-calculator": {
      total_loan_amount: emi_result.total_payment,
      monthly_emi: emi_result.monthly_emi,
      total_interest: emi_result.total_interest,
    },
    "fd-calculator": {
      total_interest: fd_result.total_interest,
      total_return_amount: fd_result.total_return_amount,
    },
    "dividend-calculator": {
      total_amount: dividend_result.cash_Amount,
      cash_tax: dividend_result.cash_Amount_Tax,
      bonus_tax: dividend_result.bonus_Share_Tax,
      total_tax: dividend_result.total_Payable_Tax,
      receive_amount: dividend_result.receivable,
    },
  };
  const results = resultData[investmenttools_id];
  const labels = resultLabels[investmenttools_id];
  const FormComponent = formComponents[investmenttools_id];
  return (
    <>
      {!FormComponent ? (
        <Error404 />
      ) : (
        <>
          <h4 className="bg-gradient-to-r from-blue-800 to-blue-600 my-5 text-2xl font-bold text-white rounded w-full h-auto uppercase text-left py-5 pl-5">
            Calculator
          </h4>
          <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded mb-4">
            <p
              className={`sm:text-xl text-navy-blue uppercase md:text-lg font-semibold mb-4 relative ${classes.custom_heading_two}`}
            >
              {investmenttools_id}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-6">{<FormComponent />}</div>
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-lg">
                {Object.keys(results).map((key, index) => (
                  <div key={index}>
                    <p className="md:text-xl track">{labels[index]}</p>
                    <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-2">
                      {typeof results[key] !== "string" &&
                      results[key] !== undefined && labels[index].toLowerCase()!=='receiveable bonus'
                        ? `Rs. ${formatNumber(results[key])}`
                        : `${results[key]}`}
                    </p>

                    {index < Object.keys(results).length - 1 && (
                      <hr className="mb-2 border-2 border-white" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InvestmentToolsCalculator;
