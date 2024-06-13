import React from 'react';
import Card from './Card';

const StockDetails = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 my-4 px-3">
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Current Units</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Sold Units</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Investment</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">WACC</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Sold Value</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Estimated Profit</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Current Value</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Dividend</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm md:text-base">Today's Gain</p>
                    <p className="font-bold text-sm md:text-base">10</p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="grid gap-4 my-4 px-3">
                {/* Maintain 2-column grid on all devices */}
                <div className="flex flex-row md:items-center justify-between">
                    <p className="text-sm md:text-base">Current Investment: <span className="font-bold text-sm md:text-base">Rs 3952</span></p>
                    <p className=" text-sm md:text-base">Profit: <span className="font-bold text-sm md:text-base">16%</span></p>
                </div>
                <div className="flex flex-row md:items-center justify-between">
                    <p className="text-sm md:text-base">Real Gain: <span className="font-bold text-sm md:text-base">Rs 3952</span></p>
                    <p className="text-sm md:text-base">Unreal Gain: <span className="font-bold text-sm md:text-base">16%</span></p>
                </div>
            </div>
            <p className="text-center text-sm md:text-base pb-2">Receiveable Amount: <span className="font-bold text-sm md:text-base">Rs 6545</span></p>
        </>
    );
};

export default StockDetails;
