import type { Metadata } from "next";
import { Montserrat, Mandali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/redux/Provider";
import Footer from "@/components/UI/Footer";
const inter = Mandali({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mero Portfolio",
  description:
    "Mero portfolio is website make with next js with Mongodb for managing stock portfolio of nepse",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg_color`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        
        <Providers>
          <main className="">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
