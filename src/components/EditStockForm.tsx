"use client";
import React from "react";
import {
  FaDollarSign,
  FaShoppingCart,
  FaTrashAlt,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
interface FormProps {
  onClose: () => void;
  symbol: string;
}

const EditStock: React.FC<FormProps> = (props) => {
  return (
    <div className="flex flex-col space-y-4 p-4 relative">
      <button
        type="button"
       
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        <span>Sell</span>
        <FaDollarSign />
      </button>
      <button
        type="button"
       
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        <span>Buy</span>
        <FaShoppingCart />
      </button>
      <button
        type="button"
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        <span>Remove</span>
        <FaTrashAlt />
      </button>
      <Link
        href={`/my-portfolio/${props.symbol}`}
        className="flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        <span>View Summary</span>
        <FaTrashAlt />
      </Link>
    </div>
  );
};

export default EditStock;
