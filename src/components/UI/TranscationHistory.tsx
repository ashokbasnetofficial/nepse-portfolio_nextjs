import { StockTransaction } from "@/interfaces/stockInterface";
import formatDate from "@/utils/dateFormatter";
import React from "react";
import { FaPray } from "react-icons/fa";
interface TranscationHistoryProps {
  transcation: StockTransaction;
}
const TranscationHistory: React.FC<TranscationHistoryProps> = (props) => {
  let investment = 0;
  if (
    props.transcation.transactionType.toLowerCase() !== "bonus_share" ||
    props.transcation.transactionType.toLowerCase() !== "dividend"
  ) {
    investment = props.transcation.quantity * props.transcation.price;
  }
  return (
    <div className="w-full bg-gray-100 px-6 py-6 rounded-lg flex justify-between items-center mb-5">
      <div className="font-semibold">
        <p>
          {props.transcation.quantity} units{" "}
          <span className="text-blue-400">
            {props.transcation.transactionType.toUpperCase()}
          </span>{" "}
          at Rs. {props.transcation.price.toFixed(2)}
        </p>
        <p>Investment: Rs.{investment.toFixed(2)}</p>
      </div>
      <p className="font-medium">{formatDate(props.transcation.transactionDate)}</p>
    </div>
  );
};
export default TranscationHistory;
