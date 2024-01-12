import React from "react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section>
      <div className="items-center px-8 py-4 pb-12 md:pb-0 md:py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="text-2xl py-4 font-bold tracking-tight text-black sm:text-4xl">
              Are you ready to ride with PROTEUS?
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
              Ride for change with Proteus Motors and be part of a cooler,
              cleaner, and sustainable future.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
            <Link
              className="items-center justify-center w-full px-6 py-2.5 font-bold  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              to=""
            >
              Contact Sales
            </Link>
            <Link
              className="items-center justify-center w-full px-6 py-2.5 font-bold  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              to=""
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
