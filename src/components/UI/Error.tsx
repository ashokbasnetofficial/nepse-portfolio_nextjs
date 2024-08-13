"use client";
import Image from "next/image";
import img from "../../../public/images/pagenotfound.gif";
import Link from "next/link";
const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="text-center">
        <Image
          src={img}
          alt="404 Not Found"
          width={300}
          priority
          height={150}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-5">
          Page Not Found
        </h1>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
export default Error404;
