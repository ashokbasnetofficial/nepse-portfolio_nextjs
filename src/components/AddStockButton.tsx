import React from "react";
import { IoMdAdd } from "react-icons/io";
const AddStockButton: React.FC<{ onClick: () => void; title: string }> = (
  props
) => {
  return (
    <button
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium uppercase rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center space-x-2"
      onClick={props.onClick}
    >
      <span>{props.title}</span> <IoMdAdd />
    </button>
  );
};

export default AddStockButton;
