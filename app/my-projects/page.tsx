"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      className='w-full h-screen overflow-y-auto flex flex-col items-center justify-center bg-[url(/mountains.jpg)] bg-center bg-cover md:px-60 md:pb-[100px] md:pt-[250px] p-10 pt-[500px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-full mx-auto'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page