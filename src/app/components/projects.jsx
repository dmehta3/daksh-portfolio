import React from 'react'
import Link from "next/link"
import Project from "./project"

const project_data = [
    {
        id: 1,
        title: "Portfolio Website", 
        description: "This portfolio is built using Tailwind CSS and Next.js 14. It showcases my passion for learning and crafting clean, efficient code. Browse through and explore my experiences, skills, and projects!",
        image: "/images/project-images/portfolio-image.png",
        gitUrl: "https://github.com/dmehta3/daksh-portfolio"
    },
    {
        id: 2, 
        title: "Finite Automata Simulator", 
        description: "This C++ program simulates a nondeterministic finite automata (NFA) by reading its definition and an input string. It showcases skills in NFA concepts, C++ programming, and algorithmic thinking.", 
        image: "images/project-images/NFA-image.jpg", 
        gitUrl: "https://github.com/dmehta3/Nondeterministic-Finite-Automata-Simulator"
    }, 
    {
        id: 3, 
        title: "CPU Branch Predictor", 
        description: "This project measures the effectiveness of several branch direction predictors on a number of traces of conditional branch instructions. It demonstrates skills in algorithm design, data analysis, and critical thinking", 
        image: "images/project-images/branch.jpg",
        gitUrl: "https://github.com/dmehta3/Branch-Predictors"
    }
]

const projects = () => {
  return (
    <section>
        <h1 className="text-center text-3xl font-bold text-bold mt-16 md:mt-8 mb-6 place-self-center">My Projects</h1>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-4">
            {project_data.map((p) => (
                <Project
                    key={p.id}
                    title ={p.title}
                    description={p.description}
                    imgUrl={p.image}
                    gitUrl={p.gitUrl}
                />
            ))}
        </div>

        <div className="grid place-items-center mb-16 md:mb-8">
            <Link href = "https://github.com/dmehta3/" rel="noopener noreferrer" target="_blank" className="px-6 py-3 text-center w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-400 text-white font-bold">
                View More
            </Link>
        </div>
    </section>
  )
}
export default projects