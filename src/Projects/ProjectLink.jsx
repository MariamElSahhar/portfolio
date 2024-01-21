import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectLink({ project }) {
  return (
    <div className='links'>
      {
            project.link ?
            <a className="link" href={project.link}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            : ''
        }
        {
            project.repo ?
            <a className="link" href={project.repo}><FontAwesomeIcon icon={faGithub} /></a>
            : ''
        }
    </div>
  )
}

export default ProjectLink
