"use client";
import AddStockButton from "@/components/AddStockButton";
import SingleStockSummary from "@/components/SingleStockSummary";
import classes from "@/app/my-portfolio/MyProfile.module.css";
import TranscationHistory from "@/components/UI/TranscationHistory";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { StockResult, StockTransaction } from "@/interfaces/stockInterface";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const StockTranscationDetailPage = ({ params }: { params: { id: string } }) => {
  const { error, loading, sendRequest: fetchStock } = useFetch();
  const [stockSummary, setStockSummary] = useState<StockResult | null>(null);
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
  }, [id, fetchStock]);

  const handleTranscation = () => {};

  const doughnutChartData = {
    labels: ["Unrealized Gain", "Realized Gain", "Investment"],
    datasets: [
      {
        data: [
          stockSummary?.unrealGain || 0,
          stockSummary?.real_Gain || 0,
          stockSummary?.current_investment || 0,
        ],
        backgroundColor: ["#FFCE56", "#FF6384", "#1e40af"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div className="mt-6 flex justify-end">
      <AddStockButton onClick={handleTranscation} title="Add Transaction" />
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-4">
        <div className={`${classes.transcation_summary_title} w-full`}>
          <h1 className="text-center text-sm sm:text-xl lg:text-2xl font-semibold">
            Stock Summary
          </h1>
        </div>

        {stockSummary && (
          <SingleStockSummary
            stock={stockSummary}
            onClick={() => null}
          />
        )}
        <div className={`${classes.transcation_summary_title} w-full`}>
          <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold">
            Chart
          </h1>
        </div>

        {stockSummary && (
          <div className="w-full max-w-md lg:max-w-lg">
            <Doughnut data={doughnutChartData} />
          </div>
        )}

        {/* Transaction History Section */}
        <div className={`${classes.transcation_summary_title} w-full`}>
          <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold">
            Transaction History
          </h1>
        </div>

        <div className="w-full">
          {stockSummary?.transactions &&
            stockSummary.transactions.map((transcation: StockTransaction) => (
              <TranscationHistory
                key={transcation._id}
                transcation={transcation}
               
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default StockTranscationDetailPage;
