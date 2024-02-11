"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from "./Navlinks"
import { EllipsisHorizontalCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MenuOverlay from "./Menu"

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

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && navbarOpen) {
        setNavbarOpen(false); // Close the mobile menu if necessary
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navbarOpen]);

  return (
    <nav className="fixed border border-b-[#33353F] border-l-transparent border-r-transparent border-t-transparent top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <button onClick={scrollToTop}>
          <Image
                src="/images/logo.png"
                alt="logo"
                className="pl-4"
                width = {75}
                height = {75}
                />
          </button>
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

export default Navigation