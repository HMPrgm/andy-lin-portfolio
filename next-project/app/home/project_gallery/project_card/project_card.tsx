import Project from '@/app/interfaces/project'
import React from 'react'
import ImageContainer from './image_container'

export default function ProjectCard({project}:{project:Project}) {
  return (
    <div>
      <div>
        <ImageContainer
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className='flex gap-1 text-lg font-openSans'>
        <span>{project.year}</span>
        <span>|</span>
        <span>{project.title}</span>
      </div>
    </div>
  )
}
