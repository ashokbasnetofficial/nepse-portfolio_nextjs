"use client";
import React from "react";
import {
  FaDollarSign,
  FaShoppingCart,
  FaTrashAlt,
  FaChartLine,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
interface FormProps {
  onClose: () => void;
  symbol: string;
}

const EditStock: React.FC<FormProps> = (props) => {
  return (
    <div className="flex flex-col space-y-4 p-6 relative bg-white shadow-lg rounded-lg border border-gray-200">
      <button 
      onClick={()=>null}
        type="button"
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-3 text-center mb-2 transition-transform transform hover:scale-105"
      >
        <FaDollarSign />
        <span>Sell</span>
      </button>

      <button
        type="button"
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-base px-6 py-3 text-center mb-2 transition-transform transform hover:scale-105"
      >
        <FaShoppingCart />
        <span>Buy</span>
      </button>

      <button
        type="button"
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-base px-6 py-3 text-center mb-2 transition-transform transform hover:scale-105"
      >
        <FaTrashAlt />
        <span>Remove</span>
      </button>

      <Link
        href={`/my-portfolio/${props.symbol}`}
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-6 py-3 text-center mb-2 transition-transform transform hover:scale-105"
      >
        <FaChartLine />
        <span>View Summary</span>
      </Link>

      {/* <button
        onClick={props.onClose}
        className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-transform transform hover:scale-110"
      >
        <FaTimes />
      </button> */}
    </div>
  );
};

export default EditStock;
