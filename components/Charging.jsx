import React from 'react'
import firstImage from '../src/images/charging1.jpg'
import secondImage from '../src/images/charging2.jpg'
import thirdImage from '../src/images/charging3.jpg'

const Charging = () => {
  return (
    <section>
                <div className="relative items-center w-full px-5 md:py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                <p className='text-[#E31837] text-center py-1  md:py-12 text-3xl md:text-5xl font-bold'> Two-in-One Charging  <span className='md:hidden'> <br/> </span>  Has Arrived</p>
                  <div className="grid md:grid-cols-2 pt-10 md:pt-0 col-span-2 gap-8 lg:grid-cols-3">

                    <figure className='my-2 md:my-0'>
                      <img className="w-full rounded-md bg-gray-200" src={firstImage} alt="" width="1310" height="873"/>
                      <p className='font-medium  text-[#1A1A1A] py-2 md:py-4 text-xl'> Charge at Home</p>
                      <p> Plug-in your motorcycle while you’re parked in the garage to start the day fully charged.</p>
                    </figure>
                    <figure className='my-2 md:my-0'>
                    <img className="w-full rounded-md text-[#1A1A1A] bg-gray-200" src={secondImage} alt="" width="1310" height="873"/>
                    <p className='font-medium py-2 md:py-4 text-xl'> Charge in Your Home </p>
                      <p> Charge your battery from the security of your home to get the most out of your removable battery.</p>
                    </figure>
                    <figure className='my-2 md:my-0'>
                    <img className="w-full rounded-md text-[#1A1A1A] bg-gray-200" src={secondImage} alt="" width="1310" height="873"/>
                    <p className='font-medium py-2 md:py-4 text-xl'> Swap on the go </p>
                      <p> Swap batteries while riding around the city for zero-wait energy replenishment and say goodbye to range anxiety.</p>
                    </figure>
                  </div>
                </div>
              </section>            
                
  )
}

export default Charging