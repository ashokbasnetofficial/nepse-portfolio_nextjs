
import React from 'react'
import { IoMdAdd } from "react-icons/io";
const AddStockButton: React.FC<{onClick:()=>void}> = (props) => {
  return (
    <button className='btn-primary rounded-full  flex items-center uppercase mb-4' onClick={props.onClick} ><span>Add Stock</span> <IoMdAdd /></button>
  )
}

export default AddStockButton