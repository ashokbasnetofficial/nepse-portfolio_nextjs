import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/redux/Provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mero Portfolio",
  description: "Mero portfolio is website make with next js with Mongodb for managing stock portfolio of nepse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>
          <main className="lg:mx-40 md:mx-20 sm:mx-10 xs:mx-5">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
