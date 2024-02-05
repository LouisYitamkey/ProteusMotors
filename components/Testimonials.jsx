import React from "react";
import { Link } from "react-router-dom";
import Image from "../src/images/proteusnetwork.webp";

export const Testimonials = () => {
  return (
    <div className="flex md:min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 md:px-8 md:py-8  lg:flex-none lg:px-24">
        <div className="w-full mx-auto lg:max-w-6xl">
          <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
            <div>
              <p className="text-2xl pl-6 font-bold tracking-tight text-black sm:text-4xl">
              Limitless Electric <span className="text-[#E31837]">Fleets. </span> 
              </p>

              <p className="max-w-xl px-6 my-6 text-left md:text-xl text-lg tracking-tight text-gray-600">
              Transform your fleet to become electric with Ionex. Ionex Energy offers a wide variety of two-in-one charging electric motorcycles, paired with suitable battery services. Electric mobility is now boundless.
              </p>

              <div className="relative md:hidden items-center w-full px-5 py-10 mx-auto md:px-12 lg:px-20 max-w-7xl">
                <figure className="">
                  <img
                    className="object-center rounded-md w-full h-auto bg-gray-200"
                    src={Image}
                    alt="Image"
                    width="1310"
                    height="873"
                  />
                </figure>
              </div>
            </div>
            <div className="flex flex-col px-6 items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-start">
            <Link
                className="items-center font-bold justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                to='tel:+233 54 193 0635'
              >
                {' '}
                Contact Sales
              </Link>

              <Link className="inline-flex items-center my-2 justify-center px-6 text-base  text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
                {" "}
                Learn more &nbsp;→{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 order-first hidden w-0 bg-gray-300 lg:block">
        <div>
          <img
            className="absolute inset-0 object-cover rounded-md w-full h-full lg:border-l"
            src={Image}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
