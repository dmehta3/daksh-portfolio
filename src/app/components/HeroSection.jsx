import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className ="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                Hi, I'm Daksh!
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I'm an aspiring Software Developer looking for interships in Summer 2024
              </p>
              <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-400 text-white ">Hire Me</button>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full  bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Resume</button>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className="rounded-full bg-[#28282B] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                <Image
                src="/images/pfp.png"
                alt="Professional Headshot"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width = {200}
                height = {200}
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection