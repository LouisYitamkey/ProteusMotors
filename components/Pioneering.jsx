import React from "react";
import Image from '../src/images/evbike1.png'

const Pioneering = () => {
  return (
    <div>
      <div className="flex md:min-h-screen ">
        <div className="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
          <div className="w-full mx-auto lg:max-w-6xl">
            <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div>
                <p className="text-2xl py-4 font-bold tracking-tight text-black sm:text-4xl">
                Pioneering Electric Vehicles (EVs) in Africa.
                </p>
                <p className="max-w-xl  mt-4 md:text-xl text-lg tracking-tight text-gray-600">
                Proteus Motors is at the forefront of sustainable mobility in Africa, offering cutting-edge electric vehicles
                that empower individuals and businesses.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center max-w-lg gap-3 mx-auto mt-10 lg:flex-row lg:justify-start">
                <a
                  href="#"
                  className="items-center font-bold justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Contact Sales
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 justify-center text-sm  text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                >
                  Learn more &nbsp; →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 lg:block">
          <div>
            <img
              className="absolute rounded-md inset-0 object-cover w-full h-full bg-gray-200 lg:border-l"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pioneering;
