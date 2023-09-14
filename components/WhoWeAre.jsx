import React from 'react'
import Image from '../src/images/evbike.webp'

const WhoWeAre = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-black sm:text-4xl">
                    We are PROTEUS
                  </p>
                  <p className="text-2xl py-4 font-bold tracking-tight text-black sm:text-4xl">
                  We are bringing the future of mobility to Africa today
                  </p>
                  <p className="max-w-xl mt-4 text-xl tracking-tight text-gray-600">
                  Our electric motorbikes are more than vehicles; they are a lifestyle choice that combines technology, 
                  style, and sustainability.
                  </p>
                  <p className="max-w-xl mt-4 text-xl py-2 tracking-tight text-gray-600">
                  Be the change. Ride for change with Proteus Motors and be part of a cooler, cleaner, and sustainable
                  future
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  {/* <a
                    href="#"
                    className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Button
                  </a> */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center text-base font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    Learn mored &nbsp; →
                  </a>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img
                className="object-cover rounded-md object-center mt-20 w-full mx-auto border lg:ml-auto"
                alt="hero"
                src={Image}
              />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
