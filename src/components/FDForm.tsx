'use client';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { fdActions } from '@/redux/slices/fdSlice';
import FixedDepositData from '@/interfaces/fdInterface';
import { AppDispatch } from '@/redux/store';
let initialState:FixedDepositData ={
        principal_amount:0,
        interest_rate: 0,
        compound_type: '',
            tenure: 0,
}
const FDForm: React.FC = (props) => {

    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState<FixedDepositData>(initialState);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'interest_rate' || name === 'tenure' || name === 'principal_amount' ? Number(value) : value,
        }));
        
    };
    const resetFormHandler = ()=>{
        dispatch(fdActions.fdCalculator(initialState));
    }

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(fdActions.fdCalculator(formData));
    };

    return (
        <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
            <div className="form-group mb-2">
                <label htmlFor="principal_amount" className="block mb-2">Principal Amount</label>
                <input
                    type="number"
                    id="principal_amount"
                    name="principal_amount"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="interest_rate" className="block mb-2">Interest Rate (%)</label>
                <input
                    type="number"
                    id="interest_rate"
                    name="interest_rate"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="tenure" className="block mb-2">Total Years</label>
                <input
                    type="number"
                    id="tenure"
                    name="tenure"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="compound_type" className="block mb-2">Compound Type</label>
                <select
                    name="compound_type"
                    id="compound_type"
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
            <div>
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Calculate
            </button>
            <input type="reset" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={resetFormHandler}/>
            </div>
        </form>
    );
};

export default FDForm;
