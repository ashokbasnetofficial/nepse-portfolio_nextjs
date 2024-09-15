"use client";
import classes from "./MyProfile.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStockButton from "@/components/AddStockButton";
import AddStockForm from "@/components/AddStockForm";
import EditStock from "@/components/EditStockForm";
import SearchStock from "@/components/SearchStock";
import SingleStockSummary from "@/components/SingleStockSummary";
import StockSummary from "@/components/StockSummary";
import Modal from "@/components/UI/Modal";
import { FaTimes } from "react-icons/fa";
import useFetch from "@/hooks/use-fetch";
import { RootState } from "@/redux/store";
import { portfolioAction } from "@/redux/slices/portfolioSlice";
const MyProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockName, setStockName] = useState("");
  const { loading, error, sendRequest } = useFetch();
  const [isFormSubmitted, setIsSetFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const stocks = useSelector((state: RootState) => state.portfolio);
  useEffect(() => {
    console.log("fetching stock");
    const fetchStocks = async () => {
      sendRequest(
        {
          method: "GET",
          url: "api/stocks",
          data: null,
        },
        (data: any) => {
          dispatch(portfolioAction.setStocks(data));
        }
      );
    };
    fetchStocks();
    setIsSetFormSubmitted(false);
  }, [dispatch, sendRequest, isFormSubmitted]);
  const handleStockForm = async (formData: any) => {
    try {
      await sendRequest(
        {
          url: "api/stocks",
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data: any) => {
          console.log(data);
          setIsSetFormSubmitted(true);
        }
      );
    } catch (err) {
      console.log("Failed to add transcation", err);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const stockActionHandler = (stockSymbol: string) => {
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

      {loading ? (
        <p className="text-xl h-screen text-center flex justify-center align-center my-auto">
          Loading...
        </p>
      ) : (
        <div className="mt-5 w-full flex flex-col items-end mb-4">
          <AddStockButton onClick={toggleModal} />
          <StockSummary />
          <SearchStock />
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4 mx-auto">
            {stocks.map((stock) => (
              <SingleStockSummary
                key={stock.symbol}
                stock={stock}
                onClick={stockActionHandler}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;
