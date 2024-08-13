import React from 'react'
import Card from './UI/Card'
import StockDetails from './UI/StockDetails'
interface stockSummaryProps {
  onClick:(stockName:string)=>void;
}
const SingleStockSummary:React.FC<stockSummaryProps> = (props) => {
  
  return (
    <Card onClick={()=>props.onClick('SONA')}>
      <div className='flex flex-row items-center bg-blue-400 justify-between px-4 py-4 uppercase rounded-lg'>
    <p className='font-bold text-base sm:text-lg md:text-xl'>SONA</p>
    <p className='flex flex-row items-center text-sm sm:text-base md:text-lg'>
        ltp: <span className='bg-blue-600 rounded-sm text-white font-bold'>358.5</span>
    </p>
    <p className='flex flex-row items-center text-sm sm:text-base md:text-lg space-x-2 sm:space-x-4 md:space-x-6'>
        ch: <span className='bg-blue-600 rounded-sm  text-white font-bold'>+14.5</span> 
        <span className='bg-blue-600 rounded-sm text-white font-bold'>+3.89%</span>
    </p>
</div>
      <StockDetails />
    </Card>
  )
}

export default SingleStockSummary