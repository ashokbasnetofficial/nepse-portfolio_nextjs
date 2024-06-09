"use client";
import Link from 'next/link'
import { FaChartLine } from "react-icons/fa";
import classes from './investmentTools.module.css';
import { FaPercent } from "react-icons/fa";
import InvestmentToolsLinks from '@/interfaces/investmentLinkInterface';
import { TbMoneybag } from "react-icons/tb";
import { BiSolidCoinStack } from "react-icons/bi";
import { PiChartLineDownBold } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
const LinkData: InvestmentToolsLinks[] = [
    {
        id: 1,
        href: 'investment-tools/share-sell-calculator',
        title: 'Sell Calculator',
        icon: <PiChartLineDownBold />
    },
    {
        id: 2,
        href: 'investment-tools/share-buy-calculator',
        title: 'Buy Calculator',
        icon: <FaChartLine />
    },
    {
        id: 3,
        href: 'investment-tools/loan-calculator',
        title: 'EMI Loan Calculator',
        icon: <GiReceiveMoney />
    },
    {
        id: 4,
        href: 'investment-tools/fd-calculator',
        title: 'FD Interest Calculator',
        icon: <FaPercent />
    },
    {
        id: 5,
        href: 'investment-tools/investment-calculator',
        title: 'Investment Calculator',
        icon: <TbMoneybag />
    },
    {
        id: 6,
        href: 'investment-tools/sip-calculator',
        title: 'SIP Calculator',
        icon: <BiSolidCoinStack />
    }

]
const InvestmentToolsPage = () => {
    return (
        <div className="flex flex-col items-center space-y-10 mb-5 z-0">
            <div className={`${classes.title} mt-10`}>
                <h1 className="relative text-center text-2xl font-light text-gray-900 tracking-wide uppercase">
                    Investment Tools
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                {LinkData.map((item: InvestmentToolsLinks) => {
                    return <Link key={item.id} href={item.href} className="btn-link bg-navy-blue flex items-center justify-center h-40 sm:h-30">{item.title} <span className='pl-2 lg:text-4xl md:text-3xl sm:text-2xl'>{item.icon}</span></Link>

                })}
            </div>
        </div>

    )
}
export default InvestmentToolsPage;