import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
        <div className="container p-8 flex items-center justify-between">
            <span>
                    <Image
                    src="/images/logo.png"
                    alt="logo"
                    width = {50}
                    height = {50}
                    />
            </span>
            <p className="text-slate-500 font-semibold">Made by Daksh Mehta</p>
        </div>
    </footer>
  )
}

export default Footer