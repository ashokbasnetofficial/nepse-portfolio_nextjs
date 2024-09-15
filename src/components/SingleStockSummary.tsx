import React from "react";
import Card from "./UI/Card";
import { StockResult } from "@/interfaces/stockInterface";
import SingleStockDetails from "./UI/SingleStockDetail";
interface stockSummaryProps {
  onClick: (stockName: string) => void;
  stock: StockResult;
}

const SingleStockSummary: React.FC<stockSummaryProps> = (props) => {
  const cardStyle =
    props.stock.CH.percentage >= 0 ? "bg-blue-300" : "bg-red-300";
  const bgChange =
    props.stock.CH.percentage >= 0 ? "bg-blue-500" : "bg-red-500";
  return (
    <Card
      onClick={() => props.onClick(props.stock.symbol)}
      percentChange={props.stock.CH.percentage}
    >
      <div
        className={`flex flex-row items-center ${cardStyle} justify-between px-4 py-4 uppercase rounded-lg`}
      >
        <p className="font-bold text-base sm:text-lg md:text-xl">
          {props.stock.symbol}
        </p>
        <p className="flex flex-row items-center text-sm sm:text-base md:text-lg ">
          ltp:{" "}
          <span
            className={` ${bgChange} rounded-sm text-white font-bold px-2 py-1`}
          >
            {props.stock.LTP}
          </span>
        </p>
        <p className="flex flex-row items-center text-sm sm:text-base md:text-lg space-x-2 sm:space-x-4 md:space-x-6">
          ch:{" "}
          <span
            className={` ${bgChange} rounded-sm  text-white font-bold px-2 py-1`}
          >
            {props.stock.CH.absolute}
          </span>
          <span
            className={`${bgChange} rounded-sm text-white font-bold px-2 py-1`}
          >
            {props.stock.CH.percentage}%
          </span>
        </p>
      </div>
      <SingleStockDetails stock={props.stock} />
    </Card>
  );
};

export default SingleStockSummary;
