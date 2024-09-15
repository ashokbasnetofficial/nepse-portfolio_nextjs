import dbConnect from "@/app/lib/connectDB";
import { IStock, Stock } from "@/models/Stock";
import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { NepseData } from "../../nepse/route";
import { StockResult } from "@/interfaces/stockInterface";
import getTaxPercentage from "@/utils/getTaxPercentage";
import { stockCalculator } from "@/utils/stockCalculator";

export async function GET(req: NextRequest) {
  const { pathname } = req.nextUrl;
  let symbol = pathname.split("/").pop();
  if (symbol) {
    symbol = symbol?.toUpperCase();
    console.log("Fetched symbol:", symbol);
  } else {
    throw new Error("Invalid URL");
  }

  try {
    await dbConnect();

    let stock: any = await Stock.findOne({ symbol: symbol });
    if (!stock || stock.length === 0) {
      throw new Error("Stock not found.");
    }
    console.log(stock.transactions);

    const response = await axios.get("http://localhost:3000/api/nepse");
    if (response.status !== 200) {
      console.log("Error fetching Nepse data:", response.statusText);
      throw new Error("Failed to fetch Nepse Data.");
    }

    const nepseData: NepseData[] = await response.data.data;
    console.log("Fetched Nepse Data:", nepseData);

    const singleNepseData = nepseData.find(
      (nepseStock) => nepseStock.symbol.toUpperCase() === symbol
    );

    if (!singleNepseData) {
      throw new Error("Nepse data for the symbol not found.");
    }
    const dividendSum = stock.transactions
      .filter(
        (transaction: any) =>
          transaction.transactionType.toLowerCase() === "dividend" &&
          transaction.dividend != null
      )
      .reduce((sum: number, transaction: any) => sum + transaction.dividend, 0);

    const purchase_Price = stock.avgPurchasePrice;
    const quantity = stock.totalQty;
    const LTP = singleNepseData?.LTP;
    const investment = quantity * purchase_Price;
    const currentValue = stock.totalQty * LTP;
    const taxPercentage = getTaxPercentage(stock.firstTranscation);

    const {
      total_investment,
      total_receive_amount,
      profit_or_loss,
      price_per_share,
      dividend,
    } = stockCalculator(
      purchase_Price,
      quantity,
      LTP,
      taxPercentage,
      dividendSum
    );

    let result: StockResult = {
      symbol: stock.symbol,
      LTP: singleNepseData.LTP,
      CH: {
        absolute: singleNepseData.priceDifference,
        percentage: singleNepseData.changePercent,
      },
      currentUnits: stock.totalQty,
      soldUnits: 0,
      investment: investment,
      WACC: stock.avgPurchasePrice,
      soldValue: 0,
      estimatedProfit: profit_or_loss,
      currentValue: currentValue,
      dividend: dividend,
      todayGain: 0,
      current_investment: investment,
      real_Gain: 0,
      unrealGain: profit_or_loss,
      receiveable_Amount: total_receive_amount,
      profit: 0,
      transactions: stock.transactions,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.log("Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
