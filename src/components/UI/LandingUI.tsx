import Image from "next/image";
import landingPageImg from "../../../public/images/landingpage.gif";
import { FaLock, FaChartLine, FaMobileAlt, FaRocket } from "react-icons/fa";
import Services from "./Services";
import Link from "next/link";

const LandingUI = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h4 className="text-4xl font-bold mb-4">Ready to grow</h4>
            <h4 className="text-4xl uppercase font-bold mb-4">
              your portfolio
            </h4>
            <Link href="/login">
              <button className="text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 hidden xs:block">
            <Image
              src={landingPageImg}
              height={400}
              width={600}
              alt="landing page"
              className="mx-auto"
            />
          </div>
        </div>
        <Services />
        {/* <div className="w-full mt-12">
                    <h5 className='text-center mb-8 text-3xl font-semibold'>We've got your back</h5>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <div className="text-center md:w-1/4 p-4">
                            <FaLock className='text-4xl text-blue-600 mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Secure</h6>
                            <p>Our mission is to provide services securely so that our customers can use them without second thoughts.</p>
                        </div>
                        <div className="text-center md:w-1/4 p-4">
                            <FaChartLine className='text-4xl text-green-600 mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Real Time Data</h6>
                            <p>Our mission is to provide real-time data so that our customers can make informed decisions quickly.</p>
                        </div>
                        <div className="text-center md:w-1/4 p-4">
                            <FaMobileAlt className='text-4xl text-purple-600 mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Responsive</h6>
                            <p>Our mission is to provide responsive services so that our customers can use them seamlessly on any device.</p>
                        </div>
                        <div className="text-center md:w-1/4 p-4">
                            <FaRocket className='text-4xl text-red-600 mx-auto mb-2' />
                            <h6 className="font-bold mb-2">Blazing Fast</h6>
                            <p>Our mission is to provide blazing fast services so that our customers can save valuable time.</p>
                        </div>
                    </div>
                </div> */}
      </section>
    </>
  );
};

export default LandingUI;
