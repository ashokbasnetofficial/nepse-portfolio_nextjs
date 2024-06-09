"use client";
import React, { useState } from "react";
import ShareBuy from "@/interfaces/shareBuyInterface";
import { useDispatch } from "react-redux";
import { emiActions } from "@/redux/slices/emiSlice";
import EMIData from "@/interfaces/emiInterface";
import { AppDispatch } from "@/redux/store";
const initialState:EMIData={
    loan_amount:0,
    interest_rate:0,    
    tenure:0
}
const EMIForm: React.FC<{ onSubmit: (data:ShareBuy) => void }> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState<EMIData>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'loan_amount' || name === 'interest_rate'||name==='tenure' ? Number(value) : value
        }));
    }
    const resetFormHandler = ()=>{
        dispatch(emiActions.calculateEmi(initialState));
    }
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(emiActions.calculateEmi(formData));
       
    }
    return (
        <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
            <div className="form-group mb-2">
                <label htmlFor="loan_amount" className="block mb-2">Loan Amount</label>
                <input
                    type="number"
                    id="loan_amount"
                    name="loan_amount"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="interest_rate" className="block mb-2">Loan Rate %</label>
                <input
                    type="number"
                    id="interest_rate"
                    name="interest_rate"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="loan_tenure" className="block mb-2">Loan Tenure(in Months)</label>
                <input
                    type="number"
                    id="tenure"
                    name="tenure"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>

           <div>
           <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Calculate
            </button>
            <input type="reset" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={resetFormHandler}/>
           </div>
        </form>
    )
}

export default EMIForm;
