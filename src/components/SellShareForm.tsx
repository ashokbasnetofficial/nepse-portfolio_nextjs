'use client';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { ShareSell } from '@/interfaces/shareSellInterface';
import { AppDispatch } from '@/redux/store';
import { sellActions } from '@/redux/slices/shareSellCalculatorSlice';
const initialState:ShareSell ={
    share_Quantity:0,
    purchase_Price:0,
    selling_Price:0,
    invest_Type:'',
    capital_gain_tax:0
}
const SellShareForm: React.FC = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const [investorType, setInvestorType] = useState<string>('');
    const [formData, setFormData] = useState<ShareSell>(initialState);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'purchase_Price' || name === 'selling_Price' || name === 'share_Quantity' || name==='capital_gain_tax' ? Number(value) : value,
        }));
        if (name === 'invest_Type') {
            setInvestorType(value);
        }
    };
    const resetFormHandler = ()=>{
        dispatch(sellActions.sellShare(initialState));
    }
    const formSubmitHandler = (event: React.FormEvent) => {
        console.log(formData);
        event.preventDefault();
        dispatch(sellActions.sellShare(formData));
    };

    return (
        <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
            <div className="form-group mb-2">
                <label htmlFor="share_Quantity" className="block mb-2">Share Quantity</label>
                <input
                    type="number"
                    id="share_Quantity"
                    name="share_Quantity"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="purchase_Price" className="block mb-2">Purchase Price</label>
                <input
                    type="number"
                    id="purchase_Price"
                    name="purchase_Price"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="selling_Price" className="block mb-2">Selling Price</label>
                <input
                    type="number"
                    id="selling_Price"
                    name="selling_Price"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="invest_Type" className="block mb-2">Investor Type</label>
                <select
                    name="invest_Type"
                    id="invest_Type"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                >
                    <option value=''>Select</option>
                    <option value='Individual'>Individual</option>
                    <option value='Institutional'>Institutional</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="capital_gain_tax" className="block mb-2">Capital Gain Tax</label>
                <select
                    name="capital_gain_tax"
                    id="capital_gain_tax"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                >
                    {investorType === 'Individual' && (
                        <>
                            <option value='5'>5%</option>
                            <option value='7.5'>7.5%</option>
                        </>
                    )}
                    {investorType === 'Institutional' && (
                        <option value='10'>10%</option>
                    )}
                </select>
            </div>
            <div>
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Calculate
            </button>
            <input type="reset" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"  onClick={resetFormHandler} />
            </div>
        </form>
    );
};

export default SellShareForm;
