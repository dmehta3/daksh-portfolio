import React from 'react'
import GithubIcon from '../../../public/github-mark.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const Socials = () => {
  return (
    <section id="contact" className="mt-18 md:mt-12 grid items-center px-8 py-6">
        <h1 className="text-center text-3xl font-bold text-bold mt-16 md:mt-8 mb-6 place-self-center">Let&apos;s Connect!</h1>
        <p className="text-[#a9a9a9] text-base lg:text-lg font-semibold place-self-center text-center">
            Feel free to see more of my work and experience on LinkedIn and explore my code and contributions on GitHub
        </p>
        <div className="socials flex flex-row gap-5 mt-4 place-self-center items-center">
            <Link href = "https://github.com/dmehta3/" rel="noopener noreferrer" target="_blank">
                <Image src={GithubIcon} alt= "Github Icon" style={{ width: '50px', height: '50px' }}/>
            </Link>
            <Link href = "https://www.linkedin.com/in/dakshkmehta" rel="noopener noreferrer" target="_blank">
                <Image src={LinkedinIcon} alt= "LinkedIn Icon" style={{ width: '50px', height: '50px' }}/>
            </Link>
        </div>
    </section>
  )
}

export default Socials