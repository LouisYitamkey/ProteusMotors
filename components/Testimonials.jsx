import React from 'react'
import Image from '../src/images/proteusnetwork.webp'


export const Testimonials = () => {
  return (
    <div className="flex md:min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 md:px-8 md:py-8 md:px-12 lg:flex-none lg:px-24">
        <div className="w-full mx-auto lg:max-w-6xl">
          <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
            <div>
            <p className="text-2xl pl-6 font-bold tracking-tight text-black sm:text-4xl">
                    Ride with PROTEUS.
                  </p>
                    <p className="max-w-xl px-6 mt-4 text-lg md:text-base tracking-tight text-gray-600">
                Our electric motorbikes are more than vehicles; they are a
                lifestyle choice that combines technology, style, and
                sustainability.
              </p>
                  <div className="relative md:hidden items-center w-full px-5 py-10 mx-auto md:px-12 lg:px-20 max-w-7xl">
      <figure className="">
        <img className="object-center rounded-md w-full h-auto bg-gray-200" src={Image} alt="" width="1310" height="873"/>
      </figure>
    </div>
                

            
              
            </div>
            <div className="flex flex-col px-6 items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-start">
              <a
                href="#"
                className="items-center font-bold justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="inline-flex items-center my-2 justify-center px-6 text-sm font-semibold text-black  hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
              >
                Learn more &nbsp; →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 order-first hidden w-0 bg-gray-300 lg:block">
        <div>
          <img
            className="absolute inset-0 object-cover rounded-md w-full h-full lg:border-l"
            src={Image}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
