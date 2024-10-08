"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface FormProps {
  onSubmit: (formData: any) => void;
  onClose: () => void;
}

interface NepseData {
  symbol: string;
  companyName: string;
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
    companyName: "",
    dividend: "",
  });
  const [stocks, setStocks] = useState<NepseData[]>([]);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const stock: NepseData | undefined = stocks.find(
      (stock) =>
        stock.symbol.toLocaleLowerCase() ===
        formData.selectStock.toLocaleLowerCase()
    );
    if (stock) {
      formData.companyName = stock.companyName;
    }
    try {
      onSubmit(formData);
    } finally {
      setLoading(false);
      onClose();
    }
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
          <option value="Buy">Secondary Buy</option>
          <option value="Dividend">Dividend</option>
          <option value="Bonus_Share">Bonus Share</option>
          <option value="FPO">FPO</option>
          <option value="Right_Share">Right</option>
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
              {stock.companyName}
            </option>
          ))}
        </select>
      </div>
      {formData.transactionType.toString().toLocaleLowerCase() !==
      "dividend" ? (
        <>
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
              disabled={!formData.transactionType}
              placeholder="Ex. 500"
            />
          </div>
          {formData.transactionType.toString().toLocaleLowerCase() !==
            "bonus_share" && (
            <div>
              <label
                htmlFor="purchasePrice"
                className="block text-sm font-medium text-gray-700"
              >
                Purchase Price (Per Unit)
              </label>
              <input
                type="number"
                id="purchasePrice"
                name="purchasePrice"
                value={formData.purchasePrice}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
                disabled={!formData.transactionType}
                placeholder="Ex. Rs.100"
              />
            </div>
          )}
        </>
      ) : (
        <div>
          <label
            htmlFor="dividend"
            className="block text-sm font-medium text-gray-700"
          >
            Dividend Amount
          </label>
          <input
            type="number"
            id="dividend"
            name="dividend"
            value={formData.dividend}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            disabled={!formData.transactionType}
            placeholder="Ex. Rs. 400"
          />
        </div>
      )}

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
          disabled={!formData.transactionType}
          max={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {loading ? "Submitting.." : "Add Transcation"}
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
