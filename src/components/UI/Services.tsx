import { FaLock, FaChartLine, FaMobileAlt, FaRocket } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <div className="w-full mt-12 ">
        <h5 className="text-center mb-8 text-3xl font-semibold">
          We've got your back
        </h5>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="text-center md:w-1/4 p-4">
            <FaLock className="text-4xl text-blue-600 mx-auto mb-2" />
            <h6 className="font-bold mb-2">Secure</h6>
            <p>
              Our mission is to provide services securely so that our customers
              can use them without second thoughts.
            </p>
          </div>
          <div className="text-center md:w-1/4 p-4">
            <FaChartLine className="text-4xl text-green-600 mx-auto mb-2" />
            <h6 className="font-bold mb-2">Real Time Data</h6>
            <p>
              Our mission is to provide real-time data so that our customers can
              make informed decisions quickly.
            </p>
          </div>
          <div className="text-center md:w-1/4 p-4">
            <FaMobileAlt className="text-4xl text-purple-600 mx-auto mb-2" />
            <h6 className="font-bold mb-2">Responsive</h6>
            <p>
              Our mission is to provide responsive services so that our
              customers can use them seamlessly on any device.
            </p>
          </div>
          <div className="text-center md:w-1/4 p-4">
            <FaRocket className="text-4xl text-red-600 mx-auto mb-2" />
            <h6 className="font-bold mb-2">Blazing Fast</h6>
            <p>
              Our mission is to provide blazing fast services so that our
              customers can save valuable time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
