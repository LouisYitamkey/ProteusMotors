import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../src/images/evbike1.png'

const EasyRepairs = () => {
  return (
    <div className="flex  md:pt-0 md:pb-0 pb-10 md:min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-8 md:py-8 md:px-12 lg:flex-none lg:px-24">
        <div className="w-full mx-auto lg:max-w-6xl">
          <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
            <div>
              
              <p className="text-2xl pt-10 md:pt-2 font-bold tracking-tight text-black sm:text-4xl">
              Unveiling a World of <span className='text-[#E31837]'> Possibilities. </span>
              </p>

              <p className="max-w-xl mt-4 hidden md:block text-xl md:text-lg tracking-tight text-gray-600">
              Soon electric motorcycles are not just a mode of transportation but a part of our daily lives. Energy Companies provide riders with battery services, eliminating the need to purchase batteries upfront.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mt-6 lg:flex-row lg:justify-start">
              <Link
                className="items-center font-bold justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                to='tel:+233 54 193 0635'
              >
                {' '}
                Contact Sales
              </Link>

              <Link
                className="inline-flex py-2 md:py-0 items-center px-6 justify-center text-base  text-blue-500 underline hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600"
                to=""
              >
                {' '}
                Become a BaaS Provider  →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-md flex-1 order-first hidden w-0 bg-gray-300 lg:block">
        <div>
          <img
            className="absolute inset-0 object-cover  w-full h-full lg:border-l"
            src={Image}
            alt="Image"
          />
        </div>
      </div>
    </div>
  )
}

export default EasyRepairs
