import Image from "next/image";
import Services from "./Services";
import bg1 from "../../../public/images/hero-1-img.png";
import bg2 from "../../../public/images/hero-1-bottom-shape.png";
import googleIcon from "../../../public/images/google.png";
import bg3 from "../../../public/images/hero-1-bg.png";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
import classes from "@/components/UI/LandingPage.module.css";

const LandingUI = () => {
  return (
    <>
      <section
        id="home"
        className="relative bg-blue-600 overflow-hidden bg-cover w-full"
        style={{
          backgroundImage: `url(${bg3.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-1 px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div className="lg:mb-0 mb-12 lg:pl-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                GROW YOUR PORTFOLIO NOW!
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-normal text-white/70 mb-6">
                Mero Portfolio offers a comprehensive suite of financial
                calculators for SIP, FD, share transactions, and EMI. Our
                primary focus is tracking NEPSE portfolios, providing users with
                tools to manage and optimize their investments efficiently.
              </p>
              <div className="lg:max-w-lg">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* Get Started Button */}
                  <button className="py-2 px-6 text-white text-base font-medium rounded-md bg-green-500 hover:bg-green-500/80 transition duration-300">
                    Get Started
                  </button>

                  {/* Sign in with Google Button */}
                  <button className="py-2 px-6 flex items-center text-base font-medium rounded-md bg-white hover:bg-gray-100 border border-gray-300 transition duration-300">
                    <Image
                      src={googleIcon}
                      alt="Google Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:ms-auto mx-auto z-10">
              <Image src={bg1} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Image src={bg2} alt="" className="w-full h-auto" />
        </div>
        <div className="relative mb-16 flex justify-start items-center pl-6 ">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg">
            <FaArrowDown className="text-2xl text-blue-600" />
          </div>
        </div>
      </section>
      <hr/>
      <Services />
    </>
  );
};

export default LandingUI;
