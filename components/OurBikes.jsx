import React from "react";
import { Link } from "react-router-dom";
import FirstImage from "../src/images/evbike12.png";
import SecondImage from "../src/images/scooter.png";
import ThirdImage from "../src/images/evbikewhite.png";

const OurBikes = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
          <div className="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-1 md:col-span-3 lg:col-span-2">
            <p className="text-2xl font-bold  tracking-tight text-black sm:text-4xl">
              Meet our <span className="text-[#E31837]">E-Bikes. </span> 
            </p>
            <figure>
              <img
                className="w-full rounded-md pb-2 mb-2 bg-gray-200"
                src={FirstImage}
                alt="Image"
                width="1310"
                height="873"
              />
              <span className=" bg-slate-100 my-2  py-1 rounded-md px-3">
                {" "}
                Proteus Cruiser{" "}
              </span>
              <br />

              <Link className="inline-flex  pl-3 pt-2 items-center justify-center text-sm text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
                {" "}
                Learn more &nbsp; →
              </Link>
            </figure>
            <figure>
              <img
                className="w-full rounded-md mb-2 bg-gray-200"
                src={ThirdImage}
                alt="Image"
                width="1310"
                height="873"
              />
              <span className=" bg-slate-100 my-2 py-1  rounded-md px-3">
                {" "}
                Proteus GoEasy{" "}
              </span>
              <br />
              <Link className="inline-flex  pl-3 pt-2 items-center justify-center text-sm  text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
                {" "}
                Learn more &nbsp; →
              </Link>
            </figure>
          </div>
          <figure className="lg:col-span-4 md:pt-14">
            <img
              className="w-full rounded-md  mb-2 bg-gray-200"
              src={SecondImage}
              alt="Image"
              width="1310"
              height="873"
            />

            <span className=" bg-slate-100 my-2 py-1 rounded-md px-3">
              {" "}
              Proteus All Weather{" "}
            </span>
            <br />
            <Link className="inline-flex  pl-3 pt-2 items-center justify-center text-sm  text-blue-500  hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600">
              {" "}
              Learn more &nbsp; →
            </Link>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default OurBikes;
