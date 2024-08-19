import dbConnect from "@/app/lib/connectDB";
import { IStock } from "@/interfaces/IStock";
import { Stock } from "@/models/Stock";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect(); // Establish a connection to the database
    const data = await req.json(); // Parse the incoming JSON data
    console.log(data);
    const stock: IStock = {
      symbol: data.selectStock.toString(),
      quantity: parseInt(data.totalShareQuantity),
      purchasePrice: parseFloat(data.purchasePrice),
      transactionDate: data.transcation_date,
      companyName: data.companyName,
      dividend: 0,
    };
    const newStock = new Stock(stock);

    // Save the document to MongoDB
    await newStock.save();

    // Return a JSON response
    return NextResponse.json(
      { message: "Stock saved successfully", stock: newStock },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
