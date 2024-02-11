"use client"
import React, { useState, useTransition } from 'react'
import TabButton from "./tabButtons"

const TABS = [
    {
        title: "Languages",
        id: "languages", 
        content: (
            <ul className="list-disc pl-5">
                <li>Java</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
            </ul>
        )
    },
    {
        title: "Tools/Frameworks",
        id: "tools", 
        content: (
            <ul className ="list-disc pl-5">
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>Git/Github</li>
                        <li>Node.js</li>
                        <li>jQuery</li>
                        <li>Splunk API</li>
                        <li>OracleDB</li>
                    </ul>
        )
    },
    {
        title: "Education",
        id: "education", 
        content: (
            <ul>
                <li>
                    B.S. in Computer Science at Binghamton University
                </li>
                <li>
                    Expected Graduation May 2025
                </li>
            </ul>
        )
    }, 
    {
        title: "Experience",
        id: "experience", 
        content: (
            <ul className="list-disc pl-2">
                <li>
                    Software Engineer Intern at Binghamton Information Technology Services
                </li>
                <li>
                    Software Engineer Intern at Alpine Proxies
                </li>
            </ul>
        )
    }
]

const About = () => {
    const [tab, setTab] = useState("languages")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section id="about" className="text-white mt-18 md:mt-12 pt:24">
            <div className="grid grid-cols-1 items-center px-8 py-4">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-white text-3xl font-bold place-self-center mb-4">About Me</h1>
                    <p className="text-[#a9a9a9] text-base lg:text-lg">
                    I'm a Junior majoring in computer science at Binghamton University. I am driven by
                    the challenge of crafting efficient and responsive software solutions. I find satisfaction
                    in turning abstract concepts into tangible results, whether it's writing complex
                    algorithms or creating impactful software. I am always seeking new opportunities to connect,
                    learn, and collaborate in diverse environments. My quick learning and collaborative spirit
                    fuel my ambition to use technology to solve complex problems and find novel solutions.
                    Outside of coding, I'm an active member of the Hindu Student Council, the Student Association,
                    Upsilon Pi Epsilon, ACM, and Colorstack.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("languages")} active={tab === "languages"} >
                            {" "}
                            Languages{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("tools")} active={tab === "tools"} >
                            {" "}
                            Tools/Frameworks{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TABS.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default About