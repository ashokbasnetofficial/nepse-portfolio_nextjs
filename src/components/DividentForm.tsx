"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dividend, { DividendSummary } from "@/interfaces/dividendInterface";
import { AppDispatch } from "@/redux/store";
import { dividendActions } from "@/redux/slices/dividendSlice";
const initialState: Dividend = {
  share_units: 0,
  bonus_share: 0,
  cash_dividend: 0,
  face_value: 0,
};
const DividendForm: React.FC<{ onSubmit: (data: Dividend) => void }> = (
  props
) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<Dividend>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "share_units" ||
        name === "bonus_share" ||
        name === "cash_dividend" ||
        name === "face_value"
          ? Number(value)
          : value,
    }));
  };
  const resetFormHandler = () => {};
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(dividendActions.calculateDividend(formData));
  };
  return (
    <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
      <div className="form-group mb-2">
        <label htmlFor="share_units" className="block mb-2">
          Share Quantity
        </label>
        <input
          type="number"
          id="share_units"
          name="share_units"
          className="w-full p-2 rounded bg-white text-navy-blue"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="bonus_share" className="block mb-2">
          Bonus Dividend(%)
        </label>
        <input
          type="number"
          id="bonus_share"
          name="bonus_share"
          className="w-full p-2 rounded bg-white text-navy-blue"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="cash_dividend" className="block mb-2">
          Cash Dividend(%)
        </label>
        <input
          type="number"
          id="cash_dividend"
          name="cash_dividend"
          className="w-full p-2 rounded bg-white text-navy-blue"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="face_value" className="block mb-2">
          Paid-up Value per Share
        </label>
        <input
          type="number"
          id="face_value"
          name="face_value"
          className="w-full p-2 rounded bg-white text-navy-blue"
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Calculate
        </button>
        <input
          type="reset"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={resetFormHandler}
        />
      </div>
    </form>
  );
};

export default DividendForm;
