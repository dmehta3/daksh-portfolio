"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const headerSection = () => {
  return (
    <section>
        <div className ="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 text-center sm:text-left">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                Hi, I'm
                <br></br>
                <TypeAnimation
                  sequence={[
                    ' Daksh',
                    1500,
                    ' a Software Engineer',
                    1500
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#A9A9A9] text-base sm:text-lg mb-6 lg:text-xl">
                Currently seeking internships for Summer 2024
              </p>
              <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-400 text-white ">
                  Hire Me
                </button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-800 text-white mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Resume</span>
                </button>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className="rounded-full bg-[#28282B] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                <Image
                src="/images/pfp.png"
                alt="Professional Headshot"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width = {250}
                height = {250}
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default headerSection