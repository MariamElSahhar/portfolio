import React from 'react'
import projectsData from './projects.json'
import '../styles/projects.scss'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section id="projects-section" className='scroll-section'>
            <h2>Projects</h2>
            <div id="projects-list">
            {
                projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
            </div>
        </section>
  )
}

export default Projects

