import React from 'react'
import Image from '../src/images/evbike.webp'

const MotorImage = () => {
  return (
    <section className="bg-white">
      <div className="relative  items-center w-full px-5 pb-12 mx-auto mb-12 md:px-12 lg:px-16 max-w-full">
        <img className="w-full bg-gray-300" src={Image} alt="MotorImage" />
      </div>
    </section>
  )
}

export default MotorImage
