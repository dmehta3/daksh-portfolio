"use client"
import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const NavLink = ({ href, title }) => {
  const isScrollLink = href.startsWith('#');
  
  if (isScrollLink) {
    return (
      <ScrollLink
        activeClass="active"
        to={href.substring(1)}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="block py-2 pl-3 pr-4 text-[#A9A9A9] sm:text-xl rounded md:p-0 hover:text-white font-semibold"
      >
        {title}
      </ScrollLink>
    );
  } else {
    return (
      <Link href={href}>
        <a className="block py-2 pl-3 pr-4 text-[#A9A9A9] sm:text-xl rounded md:p-0 hover:text-white font-semibold">
          {title}
        </a>
      </Link>
    );
  }
};

export default NavLink;