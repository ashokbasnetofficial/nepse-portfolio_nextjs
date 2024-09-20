import { FaLock, FaChartLine, FaMobileAlt, FaRocket } from "react-icons/fa";
import img1 from "../../../public/images/services/1.png";
import img2 from "../../../public/images/services/2.png";
import img3 from "../../../public/images/services/3.png";
import classes from "@/components/UI/Services.module.css";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="w-full mt-20 mb-20">
        <h5 className="text-center text-blue-950 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
         Awesome Feautres
        </h5>
        <p className="text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
          A Private Limited is the most popular type of partnership in Malta.
          The limited liability is, in fact, the only type of company allowed by
          Companies.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 p-4 mt-8">
          {/* Card 1 */}
          <div
            className={`${classes.card} text-center w-full md:w-1/4 p-4 bg-[linear-gradient(180deg,#F4F4F9_40%,#FBFBFD00_60%)] shadow-lg`}
          >
            <div className={`${classes.bg} rounded-lg`}>
              <div className="flex justify-center">
                <Image
                  src={img1}
                  height={250}
                  alt="service image"
                  className="mb-12"
                  priority
                />
              </div>
              <h4 className="font-extrabold mt-4 mb-2 text-blue-950 text-xl">
                Fully Secured
              </h4>
              <p className="text-gray-600">
                Our mission is to provide services reliably so that our
                customers can trust the process without concern.
              </p>
            </div>
            <div className={`${classes.blob}`}></div>
          </div>

          {/* Card 2 */}
          <div
            className={`${classes.card} text-center w-full md:w-1/4 p-4 bg-[linear-gradient(180deg,#F4F4F9_40%,#FBFBFD00_60%)] shadow-lg`}
          >
            <div className={`${classes.bg} rounded-lg`}>
              <div className="flex justify-center">
                <Image
                  src={img2}
                  height={250}
                  alt="service image"
                  className="mb-12"
                  priority
                />
              </div>
              <h4 className="font-extrabold mt-4 mb-2 text-blue-950 text-xl">
                More Reliable
              </h4>
              <p className="text-gray-600">
                Our mission is to provide services reliably so that our
                customers can trust the process without concern.
              </p>
            </div>
            <div className={`${classes.blob}`}></div>
          </div>

          {/* Card 3 */}
          <div
            className={`${classes.card} text-center w-full md:w-1/4 p-4 bg-[linear-gradient(180deg,#F4F4F9_40%,#FBFBFD00_60%)] shadow-lg`}
          >
            <div className={`${classes.bg} rounded-lg`}>
              <div className="flex justify-center">
                <Image
                  src={img3}
                  height={250}
                  alt="service image"
                  className="mb-12"
                  priority
                />
              </div>
              <h4 className="font-extrabold mt-4 mb-2 text-blue-950 text-xl">
                Fast Access
              </h4>
              <p className="text-gray-600">
                Our mission is to provide services reliably so that our
                customers can trust the process without concern.
              </p>
            </div>
            <div className={`${classes.blob}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
