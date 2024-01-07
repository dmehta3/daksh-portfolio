"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from "./navlinks"
import { EllipsisHorizontalCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"
import MenuOverlay from "./menu"

const links = [
  {
    title: "About", 
    path: "#about",
  },
  {
    title: "Projects", 
    path: "#projects",
  },
  {
    title: "Contact", 
    path: "#contact",
  }
]

const navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={'/'}>
          <Image
                src="/images/logo.png"
                alt="logo"
                className="pl-2 pt-2"
                width = {75}
                height = {75}
                />
          </Link>
        <div className="mobile-menu block md:hidden">
            {
              !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} 
                className="flex items-center px-3 py-2 text-[#A9A9A9] hover:text-white">
                  <EllipsisHorizontalCircleIcon className="h-7 w-7" />
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(false)} 
                className="flex items-center px-3 py-2 text-[#A9A9A9] hover:text-white">
                  <XCircleIcon className="h-7 w-7" />
                </button>
              )
            } 
        </div>
        <div className="menu hidden md:block md:w-auto pr-4" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              links.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
            ))}
          </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links={links} /> : null}
    </nav>
  )
}

export default navigation