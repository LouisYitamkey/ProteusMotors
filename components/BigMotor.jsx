import React from "react";
import Image from "../src/images/evbike1.png";

export const BigMotor = () => {
  return (
    <section>
      <div className="relative items-center  w-full px-5 py-10 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <figure className="">
          <img
            className="object-center rounded-md w-full h-auto bg-gray-50"
            src={Image}
            alt="Image"
            width="1310"
            height="873"
          />
        </figure>
      </div>
    </section>
  );
};
