import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import cheerio from "cheerio";
import https from "https";

interface NepseData {
  symbol: string;
  title: string;
  LTP: string;
  changePercent: string;
  changeValue: string;
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

  $("table.table-hover tbody tr").each((index, element) => {
    const symbol = $(element).find("td:nth-child(1) a").text().trim();
    const title = $(element).find("td:nth-child(1) a").attr("title") || "";
    let LTP = $(element).find("td:nth-child(2)").text().trim();
    LTP = LTP.replace(/,/g, "");
    const changePercent = $(element).find("td:nth-child(3)").text().trim();
    const changeValue = $(element).find("td:nth-child(9)").text().trim();
    if (symbol.trim() !== "") {
      data.push({
        symbol,
        title,
        LTP,
        changePercent,
        changeValue,
      });
    }
  });

  return data;
};

export async function GET(req: NextRequest) {
  try {
    const html = await fetchNepseData();
    const data = parseNepseData(html);
    return NextResponse.json({ data });
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
