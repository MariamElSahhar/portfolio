import React from 'react'
import './styles/navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
  return (
    <nav>
        <ul>
            <li><a href="https://github.com/MariamElSahhar"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/mariam-elsahhar/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href='mailto:mariam.elsahhar@nyu.edu'><FontAwesomeIcon icon={faEnvelope} /></a></li>
            <li><a href='' download=''>CV</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
