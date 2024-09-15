import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import cheerio from "cheerio";
import https from "https";

export interface NepseData {
  symbol: string;
  companyName: string;
  LTP: number;
  changePercent: number;
  priceDifference: number;
  previousPrice: number;
}

const fetchNepseData = async () => {
  const url = "https://www.merolagani.com/LatestMarket.aspx#0";

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const response = await axios.get(url, {
    httpsAgent: agent,
    timeout: 5000,
  });

  return response.data;
};

const parseNepseData = (html: string) => {
  const $ = cheerio.load(html);
  const data: NepseData[] = [];
  let priceDifference;
  let previousPrice;
  $("table.table-hover tbody tr").each((index, element) => {
    const symbol = $(element).find("td:nth-child(1) a").text().trim();
    const companyName =
      $(element).find("td:nth-child(1) a").attr("title") || "";
    let currentPrice = $(element).find("td:nth-child(2)").text().trim();
    let LTP = parseFloat(currentPrice.replace(/,/g, ""));
    let changePercent = parseFloat(
      $(element).find("td:nth-child(3)").text().trim()
    );

    previousPrice = LTP / (1 + changePercent / 100);
    previousPrice = Math.ceil(previousPrice * 10) / 10;
    priceDifference = Math.ceil((LTP - previousPrice) * 100) / 100;
    previousPrice = parseFloat(previousPrice.toFixed(2));
    if (symbol.trim() !== "") {
      data.push({
        symbol,
        companyName,
        LTP,
        changePercent,
        priceDifference,
        previousPrice,
      });
    }
  });

  return data;
};

export async function GET(req: NextRequest) {
  try {
    const html = await fetchNepseData();
    const data = parseNepseData(html);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error(error);

    if (error.code === "ECONNRESET") {
      return NextResponse.json(
        { error: "Connection was reset. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Error fetching NEPSE data" },
      { status: 500 }
    );
  }
}
