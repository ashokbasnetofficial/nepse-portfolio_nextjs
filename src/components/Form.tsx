'use client'
import React, { useState } from "react";
import SIP from "@/interfaces/sipInterface";
const Form: React.FC<{ onSubmit: (data: SIP) => void }> = (props) => {
    const [formData, setFormData] = useState<SIP>({
        investment_period_type: '',
        investment_amount: 0,
        annual_return: 0,
        total_investment_period: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'investment_amount' || name === 'annual_return' || name === 'total_investment_period' ? Number(value) : value
        }));
    }
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit(formData)
    }

    return (
        <form className="bg-navy-blue p-6 rounded-lg text-white max-w-md mx-auto" onSubmit={formSubmitHandler}>
            <div className="form-group mb-4">
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
            <div className="form-group mb-4">
                <label htmlFor="investment_amount" className="block mb-2">Investment amount</label>
                <input
                    type="number"
                    id="investment_amount"
                    name="investment_amount"
                    className="w-full p-2 rounded bg-white text-navy-blue"

                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="annual_return" className="block mb-2">Expected annual return</label>
                <input
                    type="number"
                    id="annual_return"
                    name="annual_return"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="total_investment_period" className="block mb-2">Years</label>
                <input
                    type="number"
                    id="total_investment_period"
                    name="total_investment_period"
                    className="w-full p-2 rounded bg-white text-navy-blue"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="bg-green text-white py-2 px-4 rounded hover:bg-green-dark">
                Submit
            </button>
        </form>
    )
}

export default Form;
