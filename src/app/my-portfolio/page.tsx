"use client";
import AddStockButton from "@/components/AddStockButton";
import AddStockForm from "@/components/AddStockForm";
import SearchStock from "@/components/SearchStock";
import SingleStockSummary from "@/components/SingleStockSummary";
import StockSummary from "@/components/StockSummary";
import Modal from "@/components/UI/Modal";
import { useState } from "react";
const MyProfilePage = () => {
const [isModalOpen,setIsModalOpen] = useState<boolean>(false)
const handleStockForm =(formData:any)=>{
  console.log(formData)
}
const handleClick = ()=>{
  setIsModalOpen(!isModalOpen)
}
console.log(isModalOpen)
  return (
<>
<Modal title="Add New Transcation" onClose={()=>setIsModalOpen(!isModalOpen)} isOpen={isModalOpen} >
       <AddStockForm onClose={()=>setIsModalOpen(!isModalOpen)} onSubmit={handleStockForm} />
</Modal>
    <div className="mt-5 w-full flex flex-col items-end mb-4">
      <AddStockButton onClick={handleClick} />
      <StockSummary />
      <SearchStock />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
        <SingleStockSummary />
        <SingleStockSummary />
        <SingleStockSummary />
        <SingleStockSummary />
        <SingleStockSummary />
        <SingleStockSummary />
      </div>
    </div>
    </>
  )
}

export default MyProfilePage;