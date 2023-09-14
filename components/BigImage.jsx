import React from 'react'
import Image from '../src/images/ionx.webp'

const BigImage = () => {
  return (
    
              <section className="h-screen bg-top bg-cover bg-gray-50"  style={{
                backgroundImage: `url(${Image})`, // Use the imported image
              }} ></section>            
    
  )
}

export default BigImage
