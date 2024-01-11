import React from 'react'
import { CodeBracketIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const project = ({imgUrl, title, description, gitUrl}) => {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{background: `url(${imgUrl})`, backgroundSize: "contain"}}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-xl bg-[#28282B] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500 ">
                  <Link href={gitUrl} rel="noopener noreferrer" target="_blank"
                    className="h-14 w-14 border-2 relative rounded-full border-[#a9a9a9] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#a9a9a9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
            </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#28282B] py-6 px-4">
            <h5 className="text-xl font-semibold mb-3">{title}</h5>
            <p className="text-{#a9a9a9]">{description}</p>
        </div>
    </div>
  )
}

export default project