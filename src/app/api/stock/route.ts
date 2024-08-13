import dbConnect from "@/app/lib/connectDB";
import { stockCalculator } from "@/app/utils/stockCalculator";
import { Stock } from "@/models/Stock";
import type { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.error("Error processing the request:", error);
  }
}
