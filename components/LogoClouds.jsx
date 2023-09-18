import React from "react";
import Image from "../src/images/yangonew.png";

const LogoClouds = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h1 className="text-lg pb-10 font-bold leading-6 text-black uppercase within 500 fortune companies">
            Worldwide trust within 500 fortune companies
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 pt-6">
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={Image} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={Image} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={Image} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={Image} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={Image} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={Image} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoClouds;
