import React from 'react'
import './styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer>
        <h3>Mariam ElSahhar</h3>
        <p><img src="/icons/location.png"/>Abu Dhabi, UAE</p>
        <a href='mailto:mariam.elsahhar@nyu.edu'><img src="/icons/envelope.png"/>mariam.elsahhar@nyu.edu</a>
        <div className="links">
          <a href="https://github.com/MariamElSahhar"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/mariam-elsahhar/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='' download=''>CV</a>
        </div>

    </footer>
  )
}

export default Footer
