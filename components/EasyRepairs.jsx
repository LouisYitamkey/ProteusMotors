import React from 'react'
import Image from '../src/images/evbike1.png'
import { BigMotor } from './BigMotor'

const EasyRepairs = () => {
  return (
    
   
    <div className="flex  md:pt-0 md:pb-0 pb-10 md:min-h-screen bg-white">
    <div className="flex flex-col justify-center flex-1 px-8 md:py-8 md:px-12 lg:flex-none lg:px-24">
      <div className="w-full mx-auto lg:max-w-6xl">
        <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
          <div>
            <p className="text-2xl  font-bold tracking-tight text-black sm:text-4xl">
  We are  <span className='text-red-500'>  PROTEUS. </span>
  </p>
  <p className="text-2xl pt-2 font-bold tracking-tight text-black sm:text-4xl">
  We are bringing the future of mobility to Africa today.
  </p>


  <p className="max-w-xl mt-4 hidden md:block text-xl md:text-xl tracking-tight text-gray-600">
                Proteus Motors is at the forefront of sustainable mobility in Africa, offering cutting-edge electric vehicles
                that empower individuals and businesses.
                </p>
  </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-6 lg:flex-row lg:justify-start">
            <a href="#" className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
             Contact Sales
            </a>
            <a href="#" className="inline-flex py-2 md:py-0 items-center px-6 justify-center text-sm font-semibold text-black  hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
              Learn more &nbsp; →
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="relative rounded-md flex-1 order-first hidden w-0 bg-gray-300 lg:block">
      <div>
        <img className="absolute inset-0 object-cover  w-full h-full lg:border-l" src={Image} alt=""/>
      </div>
    </div>
  </div>

  )
}

export default EasyRepairs
