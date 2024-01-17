import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function ProjectCard({ project }) {
    const cardStyle = {
        backgroundImage: `url(${project.image})`,
    }

    return (
        <div style={cardStyle} className='project-card'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="links">
                {
                    project.link ?
                    <a href={project.link}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    : ''
                }
                {
                    project.repo ?
                    <a href={project.repo}><FontAwesomeIcon icon={faGithub} /></a>
                    : ''
                }
            </div>
        </div>
  )
}

export default ProjectCard
