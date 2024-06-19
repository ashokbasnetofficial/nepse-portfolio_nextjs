
"use client";
import Link from 'next/link';
import logo from '../../public/logo/mero portfolio.png';
import Image from 'next/image';
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href='/' className="flex space-x-1 items-center">
                    <Image src={logo} width={50} height={50} alt='mero portfolio' />
                    <p className='text-white font-bold tracking-wide text-xl pl-2'>Mero<span className='text-bright-red'>Portfolio</span></p>
                </a>
                <div className={`menu ${isOpen ? 'open' : ''} md:relative md:left-auto md:top-auto md:flex md:flex-row md:items-center md:bg-transparent md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4">
                        <li>
                            <Link href='/' className='mx-2 hover:text-bright-red transition duration-300 md:text-xl sm:text-2xl mb-4 xs:text-2xl' onClick={() => setIsOpen(!isOpen)}>Home</Link>
                        </li>
                        <li>
                            <Link href='/my-portfolio' className='mx-2 hover:text-bright-red transition duration-300  md:text-xl sm:text-2xl mb-4 xs:text-2xl' onClick={() => setIsOpen(!isOpen)}>My Portfolio</Link>
                        </li>
                        <li>
                            <Link href='/investment-tools' className='mx-2 hover:text-bright-red transition duration-300  md:text-xl sm:text-2xl mb-4  xs:text-2xl  ' onClick={() => setIsOpen(!isOpen)}>Investment Tools</Link>
                        </li>
                    </ul>
                    <Link href='/login'className="btn-primary  md:mt-2 md:ml-4">Login</Link>
                </div>
                <div className="md:hidden flex items-center z-10">
                    <button className='text-2xl text-white font-bold' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RiCloseLargeFill />: <CiMenuFries />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;