"use client";
import AddStockButton from "@/components/AddStockButton";
import SingleStockSummary from "@/components/SingleStockSummary";
import classes from "@/app/my-portfolio/MyProfile.module.css";
import TranscationHistory from "@/components/UI/TranscationHistory";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { StockResult } from "@/interfaces/stockInterface";
const stock = {
  symbol: "AAPL",
  LTP: 150.25,
  CH: {
    absolute: 5.5,
    percentage: 3.8,
  },
  currentUnits: 100,
  soldUnits: 0,
  investment: 15000,
  WACC: 148.5,
  soldValue: 0,
  estimatedProfit: 380.75,
  currentValue: 15250,
  dividend: 500,
  todayGain: 0,
  current_investment: 15000,
  real_Gain: 0,
  unrealGain: 380.75,
  receiveable_Amount: 200,
  profit: 2.5,
};

const StockTranscationDetailPage = ({ params }: { params: { id: string } }) => {
  const { error, loading, sendRequest: fetchStock } = useFetch();
  const [stockSummary, setStockSummary] = useState<StockResult | null>(null);
  console.log(stockSummary);
  const { id } = params;
  useEffect(() => {
    console.log("Component mounted or updated");
    fetchStock(
      {
        method: "GET",
        url: `/api/stocks/${id}`,
        data: null,
      },
      (data) => {
        setStockSummary(data);
      }
    );
  }, [id]);
  const handleTranscation = () => {};
  return (
    <>
      <div className="mt-5 w-full flex flex-col items-center mb-4 px-40">
        <AddStockButton onClick={handleTranscation} title="Add Transcation" />
        <div className={classes.transcation_summary_title}>
          <h1>Stock Summary</h1>
        </div>
        {stockSummary && (
          <SingleStockSummary stock={stockSummary} onClick={() => null} />
        )}
        <div className={classes.transcation_summary_title}>
          <h1>Transcation History</h1>
        </div>
        {stockSummary?.transactions &&
          stockSummary.transactions.map((transcation) => (
            <TranscationHistory transcation={transcation} />
          ))}
      </div>
    </>
  );
};
export default StockTranscationDetailPage;
