import React from 'react'
import { HeroImageBackground } from '../components/HeroSection'
import BrandValues from '../components/BrandValues'
import OurBikes from '../components/OurBikes'
import LogoClouds from '../components/LogoClouds'
import EasyRepairs from '../components/EasyRepairs'
import Pioneering from '../components/Pioneering'
import BigImage from '../components/BigImage'
import FooterCentered from '../components/Footer'
import { CallToAction } from '../components/CallToAction'
import { Testimonials } from '../components/Testimonials'
import { OurBikesMobile } from '../components/OurBikesMobile'
import { BigMotor } from '../components/BigMotor'

export const LandingPage = () => {
  const links = [
    { label: 'Platform', link: '' },
    { label: 'About Us', link: '' },
  ]
  return (
    <div>
      <HeroImageBackground />
      <div className="md:hidden">
        <BigMotor />
      </div>
      <div className="md:py-16 mx-14">
        <EasyRepairs />
      </div>

      <div className="bg-slate-50   md:my-5">
        <BrandValues />
      </div>
      {/*      
        <WhoWeAre /> */}
      <div className="  hidden md:block">
        <OurBikes />
      </div>
      <div className="md:hidden">
        <OurBikesMobile />
      </div>
      <div className="md:px-10">
        <Pioneering />
      </div>
      <div className="md:mt-32 hidden md:block ">
        <BigImage />
      </div>
      <div className="md:hidden my-10">
        <BigMotor />
      </div>
      <div className="md:my-24 md:px-16">
        <Testimonials />
      </div>
      <div className=" py-5 ">
        <LogoClouds />
      </div>
      <div className="bg-slate-50">
        <CallToAction />
      </div>

      <div className="md:px-40 mx-4 ">
        <FooterCentered links={links} />
      </div>
    </div>
  )
}
