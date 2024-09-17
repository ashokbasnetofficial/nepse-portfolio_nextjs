import type { Metadata } from "next";
import { Montserrat, Mandali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/redux/Provider";
import Footer from "@/components/UI/Footer";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import ResponsiveMain from "@/components/ResponsiveMain";
const inter = Mandali({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mero Portfolio",
  description:
    "Mero portfolio is a website built with Next.js and MongoDB for managing the NEPSE stock portfolio",
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
        <SessionProvider>
          {" "}
          {/* Wrap content with SessionProvider */}
          <Navbar />
          <Providers>
            <ResponsiveMain>
              {children}
              <Toaster />
            </ResponsiveMain>
          </Providers>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
