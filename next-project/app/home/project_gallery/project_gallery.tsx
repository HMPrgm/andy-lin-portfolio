import React from 'react'
import Project, {getProjects} from '@/app/interfaces/project'
import ProjectCard from './project_card/project_card';
export default function ProjectGallery() {
    const projects:Project[] = getProjects();
  return (
    <div className='grid grid-cols-3 gap-12'>
        {projects.map(p => <ProjectCard key={p.id} project={p}/>)}
    </div>
  )
}
