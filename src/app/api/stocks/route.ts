import dbConnect from "@/app/lib/connectDB";
import { Stock } from "@/models/Stock";
import getBrokerCommission from "@/utils/calculateBrokerCommision";
import { get_Purchase_Price } from "@/utils/getPurchasePrice";
import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { NepseData } from "../nepse/route";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const data = await req.json();

    let {
      transactionType,
      totalShareQuantity,
      selectStock,
      purchasePrice,
      transcation_date,
      companyName,
      dividend,
    } = data;
    let isNewStock = false;
    let quantity = parseInt(totalShareQuantity, 10);
    let price = parseFloat(purchasePrice);
    transactionType = transactionType.toLowerCase();
    let stock = await Stock.findOne({ symbol: selectStock });
    if (transactionType === "dividend") {
      quantity = 0;
      price = 0;
    }

    if (!stock && transactionType !== "sell") {
      stock = new Stock({
        symbol: selectStock,
        companyName,
        avgPurchasePrice: price,
        totalQty: quantity,
        transactions: [],
      });
      isNewStock = true;
    } else if (!stock) {
      throw new Error("Stock not found for non-buy transaction");
    }

    if (!stock.transactions) {
      stock.transactions = [];
    }
    const newTransaction = {
      transactionType,
      transactionDate: transcation_date,
      quantity,
      price,
      dividend,
    };
    if (transactionType === "buy") {
      const totalAmount = price * quantity;
      const brokerComission = getBrokerCommission(totalAmount);
      const totalPurchasePrice = get_Purchase_Price(
        quantity,
        purchasePrice,
        brokerComission
      );
      price = totalPurchasePrice / quantity;
    }
    switch (transactionType) {
      case "buy":
      case "ipo":
      case "fpo":
      case "right_share":
      case "auction":
        {
          if (!isNewStock) {
            const totalCost = stock.avgPurchasePrice * stock.totalQty;
            const newTotalCost = totalCost + price * quantity;
            stock.totalQty += quantity;
            stock.avgPurchasePrice = newTotalCost / stock.totalQty;
          }
        }
        break;

      case "sell":
        if (quantity > stock.totalQty) {
          throw new Error("Sell quantity exceeds available stock");
        }
        stock.totalQty -= quantity;
        break;

      case "bonus_share":
        stock.totalQty += quantity;
        break;

      case "dividend":
        break;

      default:
        throw new Error("Invalid transaction type");
    }

    stock.transactions.push(newTransaction);
    await stock.save();
    return NextResponse.json(
      { message: "Transaction added successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Get portfolio stocks
    const stockData = await Stock.find({});
    // Fetch Nepse market data
    const response = await axios.get("http://localhost:3000/api/nepse");
    if (response.status !== 200) {
      throw new Error("Failed to fetch Nepse Data.");
    }

    const nepseData = response.data.data;
    const portfolioWithMarketInfo = stockData.map((stock) => {
      let dividend = 0;
      stock.transactions.map((transaction: any) => {
        if (
          transaction.transactionType === "dividend" &&
          transaction.dividend !== null
        ) {
          dividend += transaction.dividend;
        }
      });
      const marketInfo = nepseData.find(
        (nepseStock: any) =>
          nepseStock.symbol.toLowerCase() === stock.symbol.toLowerCase()
      );
      let getMarketInfoAssociatedToStock = {
        LTP: marketInfo.LTP,
        changePercent: marketInfo.changePercent,
        priceDifference: marketInfo.priceDifference,
        previousPrice: marketInfo.previousPrice,
      };

      getMarketInfoAssociatedToStock ? getMarketInfoAssociatedToStock : null;
      return {
        _id: stock._id,
        symbol: stock.symbol,
        companyName: stock.companyName,
        ...getMarketInfoAssociatedToStock,
        avgPurchasePrice: stock.avgPurchasePrice,
        totalQty: stock.totalQty,
        dividend,
      };
    });
    return NextResponse.json(portfolioWithMarketInfo, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
