"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface FormProps {
  onSubmit: (formData: any) => void;
  onClose: () => void;
}

interface NepseData {
  symbol: string;
  title: string;
  LTP: string;
  changePercent: string;
}

const AddStockForm: React.FC<FormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    transactionType: "",
    totalShareQuantity: "",
    purchasePrice: "",
    transcation_date: "",
    selectStock: "",
    LTP: 0,
    ChangePercent: 0,
  });

  const [stocks, setStocks] = useState<NepseData[]>([]);

  useEffect(() => {
    // Fetch stocks from the API
    const fetchStocks = async () => {
      try {
        const response = await axios.get("/api/nepse");
        setStocks(response.data.data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const stock: NepseData | undefined =  stocks.find(
      (stock) =>
        stock.symbol.toLocaleLowerCase() ===
        formData.selectStock.toLocaleLowerCase()
    );
    if (stock) {
      formData.ChangePercent = parseFloat(stock.changePercent);
      formData.LTP = parseFloat(stock.LTP);
    }
    onSubmit(formData);
    // close model after submitting form
    onClose();
    // onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4" method="POST">
      <div>
        <label
          htmlFor="transactionType"
          className="block text-sm font-medium text-gray-700"
        >
          Transaction Type
        </label>
        <select
          id="transactionType"
          name="transactionType"
          value={formData.transactionType}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        >
          <option value="">Select transaction type</option>
          <option value="IPO">IPO</option>
          <option value="Secondary Buy">Secondary Buy</option>
          <option value="Dividend">Dividend</option>
          <option value="Bonus Share">Bonus Share</option>
          <option value="FPO">FPO</option>
          <option value="Right">Right</option>
          <option value="Auction">Auction</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="selectStock"
          className="block text-sm font-medium text-gray-700"
        >
          Select Stock
        </label>
        <select
          id="selectStock"
          name="selectStock"
          value={formData.selectStock}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        >
          <option value="">Select a stock</option>
          {stocks.map((stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="totalShareQuantity"
          className="block text-sm font-medium text-gray-700"
        >
          Total Share Quantity
        </label>
        <input
          type="number"
          id="totalShareQuantity"
          name="totalShareQuantity"
          value={formData.totalShareQuantity}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="purchasePrice"
          className="block text-sm font-medium text-gray-700"
        >
          Purchase Price
        </label>
        <input
          type="number"
          id="purchasePrice"
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="transcation_date"
          className="block text-sm font-medium text-gray-700"
        >
          Transaction Date
        </label>
        <input
          type="date"
          id="transcation_date"
          name="transcation_date"
          value={formData.transcation_date}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Transaction
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default AddStockForm;
