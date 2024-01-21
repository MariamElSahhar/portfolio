import React from 'react'

import Logo from './Logo'
import ProjectLink from './ProjectLink'



function ProjectCard({ project }) {
    const cardStyle = {
        backgroundImage: `url(${project.image})`,
        backgroundRepeat: `${project.repeat}`,
    }

    return (
        <div style={cardStyle} className='project-card' onClick={ () => (project.repo ? window.open(project.repo, '_blank') : window.open(project.link, '_blank') ) }>
            <ProjectLink project={project} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="stack">
            {
                project.stack.map(lang => (
                    <Logo key={lang} lang={lang} />
                    ))
                }
            </div>
        </div>
  )
}

export default ProjectCard
