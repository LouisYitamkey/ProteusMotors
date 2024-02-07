import React from "react";
import { Link } from "react-router-dom";
import FirstImage from "../src/images/evbike12.png";
import SecondImage from "../src/images/scooter.png";
import ThirdImage from "../src/images/evbikewhite.png";

export const OurBikesMobile = () => {
  return (
    <section className="bg-slate-50">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <p className="text-2xl font-bold  pb-6 tracking-tight text-black sm:text-4xl">
          Meet our <span className="text-[#E31837]">  E-Bikes </span>
        </p>
        <div className="grid grid-cols-1 col-span-2 gap-4 lg:grid-cols-4">
          <figure className="group">
            <img
              className="w-full  rounded-md mb-2  bg-white transition-transform duration-300 transform-gpu group-hover:scale-105"
              src={FirstImage}
              alt="Image"
              width="1310"
              height="873"
            />
            <span className="font-medium  bg-white  rounded-md px-3">
              {" "}
              Proteus Cruiser{" "}
            </span>
            <br />

            <Link className="inline-flex mb-2 pl-3 pt-2 items-center justify-center text-base   text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
              {" "}
              Learn more &nbsp; →
            </Link>
          </figure>
          <figure className="group">
            <img
              className="w-full rounded-md mb-2 py-7 bg-white transition-transform duration-300 transform-gpu group-hover:scale-105"
              src={SecondImage}
              alt="Image"
              width="1310"
              height="873"
            />
            <span className="font-medium bg-white  rounded-md px-3">
              {" "}
              Proteus GoEasy{" "}
            </span>
            <br />
            <Link className="inline-flex mb-2 pl-3 pt-2 items-center justify-center text-base  text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
              {" "}
              Learn more &nbsp; →
            </Link>
          </figure>
          <figure className=" mt-5 group">
            <img
              className="w-full rounded-md mb-2 py-7 bg-white transition-transform duration-300 transform-gpu group-hover:scale-105"
              src={ThirdImage}
              alt="Image"
              width="1310"
              height="873"
            />
            <span className="font-medium bg-white   rounded-md px-3">
              {" "}
              Amsterdam E-Bike{" "}
            </span>
            <br />
            <Link className="inline-flex mb-2 pl-3 pt-2 items-center justify-center text-base  text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
              {" "}
              Learn more &nbsp; →
            </Link>
          </figure>
          <figure className="mt-5 group">
            <img
              className="w-full rounded-md mb-2 py-7 bg-white transition-transform duration-300 transform-gpu group-hover:scale-105"
              src={SecondImage}
              alt="Image"
              width="1310"
              height="873"
            />
            <span className="font-medium bg-white  rounded-md px-3">
              {" "}
              All Weatherr{" "}
            </span>
            <br />
            <Link className="inline-flex mb-2 pl-3 pt-2 items-center justify-center text-base  text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
              {" "}
              Learn more &nbsp; →
            </Link>
          </figure>
        </div>
      </div>
    </section>
  );
};
