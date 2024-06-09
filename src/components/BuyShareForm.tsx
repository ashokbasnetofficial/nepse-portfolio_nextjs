"use client";
import React, { useState } from "react";
import ShareBuy from "@/interfaces/shareBuyInterface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { buyShareAction } from "@/redux/slices/shareBuyCalculatorSlice";
const initalState:ShareBuy={
    no_share_units:0,
    share_unit_price:0
}
const BuyShareForm: React.FC= (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState<ShareBuy>(initalState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'no_share_units' || name === 'share_unit_price' ? Number(value) : value
        }));
    }
    const resetFormHandler = ()=>{
        dispatch(buyShareAction.buyShare(initalState));
    }
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(buyShareAction.buyShare(formData));
       
    }
    return (
        <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
            <div className="form-group mb-2">
                <label htmlFor="share quantity" className="block mb-2">Share Quantity</label>
                <input
                    type="number"
                    id="shareQuantity"
                    name="no_share_units"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="purchase_price" className="block mb-2">Purchase Price</label>
                <input
                    type="number"
                    id="purchase_price"
                    name="share_unit_price"
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

export default BuyShareForm;
