import { StockResult } from "@/interfaces/stockInterface";
import React from "react";

interface SingleStockDetailsProps {
  stock: StockResult;
}

const SingleStockDetails: React.FC<SingleStockDetailsProps> = (props) => {
  const { stock } = props;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4 px-3">
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Current Units</p>
          <p className="font-bold text-sm md:text-base">{stock.currentUnits}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Sold Units</p>
          <p className="font-bold text-sm md:text-base">{stock.soldUnits}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Investment</p>
          <p className="font-bold text-sm md:text-base">
            Rs. {stock.investment.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">WACC</p>
          <p className="font-bold text-sm md:text-base">
            {stock.WACC.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Sold Value</p>
          <p className="font-bold text-sm md:text-base">
            Rs. {stock.soldValue.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Estimated Profit</p>
          <p className="font-bold text-sm md:text-base">
            Rs. {stock.estimatedProfit.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Current Value</p>
          <p className="font-bold text-sm md:text-base">
            Rs. {stock.currentValue.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Dividend</p>
          <p className="font-bold text-sm md:text-base">
            Rs. {stock.dividend.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Today's Gain</p>
          <p className="font-bold text-sm md:text-base">
            Rs. {stock.todayGain ? stock.todayGain.toFixed(2) : "N/A"}
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid gap-4 my-4 px-3">
        <div className="flex flex-row md:items-center justify-between">
          <p className="text-sm md:text-base">
            Current Investment:{" "}
            <span className="font-bold text-sm md:text-base">
              Rs {stock.current_investment.toFixed(2)}
            </span>
          </p>
          <p className="text-sm md:text-base">
            Profit:{" "}
            <span className="font-bold text-sm md:text-base">
              {stock.profit.toFixed(2)}%
            </span>
          </p>
        </div>
        <div className="flex flex-row md:items-center justify-between">
          <p className="text-sm md:text-base">
            Real Gain:{" "}
            <span className="font-bold text-sm md:text-base">
              Rs {stock.real_Gain.toFixed(2)}
            </span>
          </p>
          <p className="text-sm md:text-base">
            Unreal Gain:{" "}
            <span className="font-bold text-sm md:text-base">
              {stock.unrealGain.toFixed(2)}%
            </span>
          </p>
        </div>
      </div>
      <p className="text-center text-sm md:text-base pb-2">
        Receivable Amount:{" "}
        <span className="font-bold text-sm md:text-base">
          Rs {stock.receiveable_Amount.toFixed(2)}
        </span>
      </p>
    </>
  );
};

export default SingleStockDetails;
