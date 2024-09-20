import React from "react";
import {
  FaSignInAlt,
  FaChartLine,
  FaCalculator,
  FaExchangeAlt,
  FaDollarSign,
} from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
        {/* Login Feature */}
        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-10 flex items-center justify-center">
              <div className="h-full w-1 bg-gradient-to-t from-green-500 to-transparent pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
              <FaSignInAlt className="text-white" />
            </div>
          </div>
          <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-left">Login Functionality</h3>
            <p className="leading-tight text-justify w-full">
              Secure login to access and track your NEPSE portfolio.
            </p>
          </div>
        </div>

        {/* Portfolio Tracker */}
        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-10 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center">
              <FaChartLine className="text-white" />
            </div>
          </div>
          <div className="bg-blue-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-left">Portfolio Tracker</h3>
            <p className="leading-tight text-justify">
              Track your portfolio in real-time with performance graphs and
              statistics.
            </p>
          </div>
        </div>

        {/* Share Buy/Sell Calculator */}
        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-10 flex items-center justify-center">
              <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
              <FaCalculator className="text-white" />
            </div>
          </div>
          <div className="bg-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-left">Buy/Sell Calculator</h3>
            <p className="leading-tight text-justify">
              Calculate share purchase and selling costs with integrated tools.
            </p>
          </div>
        </div>

        {/* EMI Calculator */}
        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-10 flex items-center justify-center">
              <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-transparent pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center  absolute top-1/2 -mt-3 mr-1 rounded-full bg-purple-500 shadow text-center">
              <FaExchangeAlt className="text-white" />
            </div>
          </div>
          <div className="bg-purple-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-left">
              EMI Calculator
            </h3>
            <p className="leading-tight text-justify">
              Calculate your EMIs effortlessly for better financial planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
