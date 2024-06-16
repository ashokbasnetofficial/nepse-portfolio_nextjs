import Image from "next/image";
import landingPageImg from '../../../public/images/landingpage.gif'
import { GrSecure } from "react-icons/gr";

const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-6">
        <div className="md:w-1/3 p-4 text-center md:text-left">
          <p className="text-xl font-semibold mb-4">Ready to grow your portfolio</p>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
            Get Started
          </button>
        </div>
        <div className="md:w-1/3 p-4">
          <Image src={landingPageImg} height='500' width='700' alt="landing page" className="mx-auto"/>
        </div>
        <div className="md:w-1/3 p-4">
          <h5 className="text-lg font-semibold mb-4">We've got your back</h5>
          <div className="space-y-4">
            <div className="flex items-center">
              <GrSecure className="text-2xl mr-2" />
              <div>
                <h6 className="text-md font-semibold">Secure</h6>
                <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
              </div>
            </div>
            <div className="flex items-center">
              <GrSecure className="text-2xl mr-2" />
              <div>
                <h6 className="text-md font-semibold">Real Time Data</h6>
                <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
              </div>
            </div>
            <div className="flex items-center">
              <GrSecure className="text-2xl mr-2" />
              <div>
                <h6 className="text-md font-semibold">Responsive</h6>
                <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
              </div>
            </div>
            <div className="flex items-center">
              <GrSecure className="text-2xl mr-2" />
              <div>
                <h6 className="text-md font-semibold">Blazing Fast</h6>
                <p>One of our missions is to provide services securely so that our customers can use it without second thoughts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
