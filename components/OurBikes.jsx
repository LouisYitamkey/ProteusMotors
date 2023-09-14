import React from 'react'
import FirstImage from '../src/images/evbike12.png'
import SecondImage from '../src/images/scooter.png'
import ThirdImage from '../src/images/evbikewhite.png'


const OurBikes = () => {
  return (
    
    <section>
    <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-20 max-w-7xl">
      <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
        
        <div className="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-1 md:col-span-3 lg:col-span-2">
        <p className="text-2xl font-bold  tracking-tight text-black sm:text-4xl">
                    Meet our E-Bikes.
                  </p>
          <figure>
            <img className="w-full rounded-md pb-2 mb-2 bg-gray-200" src={FirstImage} alt="" width="1310" height="873"/>
            <span className='font-medium bg-slate-100 my-2  rounded-md px-3'> Amsterdam E-Bike  </span><br/>
            <a href="#" className="inline-flex  pt-2 items-center justify-center text-base font-semibold text-black  hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
              Learn more &nbsp; →
            </a>

          </figure>
          <figure>
            <img className="w-full rounded-md mb-2 bg-gray-200" src={ThirdImage} alt="" width="1310" height="873"/>
            <span className='font-medium bg-slate-100 my-2  rounded-md px-3'> All weather E-Bike  </span><br/>
            <a href="#" className="inline-flex  pt-2 items-center justify-center text-base font-semibold text-black  hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
              Learn more &nbsp; →
            </a>
           
          </figure>
        </div>
        <figure className="lg:col-span-4 md:pt-14">
          <img className="w-full rounded-md  mb-2 bg-gray-200" src={SecondImage} alt="" width="1310" height="873"/>
       
          <span className='font-medium bg-slate-100 my-2  rounded-md px-3'> Obaatanpa E-Bike  </span><br/>
          <a href="#" className="inline-flex  pt-2 items-center justify-center text-base font-semibold text-black hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
              Learn more &nbsp; →
            </a>
           

        </figure>
      </div>
    </div>
  </section>            
 
  )
}

export default OurBikes
