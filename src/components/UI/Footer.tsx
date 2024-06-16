"use client";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo/mero portfolio.png';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <a href='/' className="flex items-center gap-2">
            <Image src={logo} height='50' width='50' alt="logo" />
            <p className='text-white font-bold tracking-wide text-xl pl-2'>Mero<span className='text-bright-red'>Portfolio</span></p>
          </a>
          <p className="mt-4 text-sm text-justify">Mero Portfolio offers a comprehensive suite of financial calculators for SIP, FD, share transactions, and EMI. Our primary focus is tracking NEPSE portfolios, providing users with tools to manage and optimize their investments efficiently.
          </p>
        </div>
        
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <div className="flex flex-col gap-2">
            <Link href='/' className="hover:text-bright-red transition duration-300">Home</Link>
            <Link href='/my-portfolio' className="hover:text-bright-red transition duration-300">My Portfolio</Link>
            <Link href='/investment-tools' className="hover:text-bright-red transition duration-300">Investment Tools</Link>
          </div>
        </div>
        
        <div>
          <h5 className="font-semibold mb-2">Calculator</h5>
          <div className="flex flex-col gap-2">
            <Link href='/calculator/share-sell' className="hover:text-bright-red transition duration-300">Share Sell Calculator</Link>
            <Link href='/calculator/share-buy' className="hover:text-bright-red transition duration-300">Share Buy Calculator</Link>
            <Link href='/calculator/emi' className="hover:text-bright-red transition duration-300">EMI Calculator</Link>
            <Link href='/calculator/interest' className="hover:text-bright-red transition duration-300">Interest Calculator</Link>
            <Link href='/calculator/investment' className="hover:text-bright-red transition duration-300">Investment Calculator</Link>
            <Link href='/calculator/sip' className="hover:text-bright-red transition duration-300">SIP Calculator</Link>             
          </div>
        </div>
        
        <div>
          <h5 className="font-semibold mb-2">Useful Links</h5>
          <div className="flex flex-col gap-2">
            <Link href='https://www.nepse.com.np' className="hover:text-bright-red transition duration-300">Nepse</Link>
            <Link href='https://www.merolagani.com' className="hover:text-bright-red transition duration-300">MeroLagani</Link>
            <Link href='https://www.sebon.gov.np' className="hover:text-bright-red transition duration-300">SEBON</Link>
            <Link href='https://www.nepsealpha.com' className="hover:text-bright-red transition duration-300">NepseAlpha</Link>            
          </div>
        </div>
      </div>
      <hr className="my-8 border-white" />
      <p className="text-center">&copy; 2024 Copyright: <a href='/' className="hover:text-bright-red transition duration-300">Mero Portfolio</a></p>
    </div>
  );
}
export default Footer;
