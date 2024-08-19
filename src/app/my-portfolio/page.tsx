"use client";
import classes from "./MyProfile.module.css";
import { useState } from "react";
import AddStockButton from "@/components/AddStockButton";
import AddStockForm from "@/components/AddStockForm";
import EditStock from "@/components/EditStockForm";
import SearchStock from "@/components/SearchStock";
import SingleStockSummary from "@/components/SingleStockSummary";
import StockSummary from "@/components/StockSummary";
import Modal from "@/components/UI/Modal";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
const MyProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockName, setStockName] = useState("");

  const handleStockForm = async (formData: any) => {
    console.log(formData);
    try {
      const response = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: "/api/stock",
        data: formData,
      });
      if (response.status === 201) {
        console.log("data inserted successfully", response.data);
      } else {
        throw new Error("some thing went wrong!");
      }
    } catch (err) {
      console.log("something went wrong!", err);
    }
    setStockName("");
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const stockActionHandler = (stockSymbol: string) => {
    console.log(stockSymbol);
    setStockName(stockSymbol);
    toggleModal();
  };

  return (
    <>
      <Modal
        title={stockName ? "Edit Stock" : "Add New Transaction"}
        onClose={toggleModal}
        isOpen={isModalOpen}
      >
        {stockName ? (
          <>
            <button
              type="button"
              onClick={toggleModal}
              className={`absolute ${classes.close_modal} flex items-center justify-center w-8 h-8 bg-white rounded-full text-gray-600 hover:text-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800`}
            >
              <FaTimes />
            </button>
            <EditStock onClose={toggleModal} onSubmit={handleStockForm} />
          </>
        ) : (
          <AddStockForm onClose={toggleModal} onSubmit={handleStockForm} />
        )}
      </Modal>

      <div className="mt-5 w-full flex flex-col items-end mb-4">
        <AddStockButton onClick={toggleModal} />
        <StockSummary />
        <SearchStock />
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
          <SingleStockSummary onClick={stockActionHandler} />
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
