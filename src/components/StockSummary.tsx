import React from 'react'
import Card from './UI/Card'
import StockDetails from './UI/StockDetails'

const StockSummary = () => {
    return (
        <Card>
            <h5 className='bg-green-500  px-4 py-4 uppercase text-center text-white font-bold rounded-lg' >summary</h5>
            <StockDetails />
        </Card>
    )
}

export default StockSummary