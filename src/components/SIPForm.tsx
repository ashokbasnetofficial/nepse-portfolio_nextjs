"use client";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import SIP from "@/interfaces/sipInterface";
import { sipActions } from "@/redux/slices/sipCalSlice";
import { AppDispatch } from "@/redux/store";
const initialState:SIP={
    investment_period_type: '',
    investment_amount: 0,
    annual_return: 0,
    total_investment_period: 0
}
const SIPForm: React.FC = (props) => {
    const dispatch=useDispatch<AppDispatch>()
    const [formData, setFormData] = useState<SIP>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'investment_amount' || name === 'annual_return' || name === 'total_investment_period' ? Number(value) : value
        }));
    }
    const resetFormHandler = ()=>{
        dispatch(sipActions.sipCalculator(initialState));   
    }
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
        dispatch(sipActions.sipCalculator(formData));   
       
    }

    return (
        <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
            <div className="form-group mb-2">
                <label htmlFor="investment_period_type" className="block mb-2">Investment period</label>
                <select
                    name="investment_period_type"
                    id="investment_period_type"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                >
                    <option value=''>Choose</option>
                    <option value='monthly'>Monthly</option>
                    <option value='quarterly'>Quarterly</option>
                    <option value='semi_annually'>Semi Annually</option>
                    <option value='annually'>Annually</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="investment_amount" className="block mb-2">Investment amount</label>
                <input
                    type="number"
                    id="investment_amount"
                    name="investment_amount"
                    className="w-full p-2 rounded bg-white text-navy-blue"

                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="annual_return" className="block mb-2">Expected annual return</label>
                <input
                    type="number"
                    id="annual_return"
                    name="annual_return"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="total_investment_period" className="block mb-2">Years</label>
                <input
                    type="number"
                    id="total_investment_period"
                    name="total_investment_period"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
           <div>
           <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Calculate
            </button>
            <input type="reset" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={resetFormHandler} />

           </div>
        </form>
    )
}

export default SIPForm;
