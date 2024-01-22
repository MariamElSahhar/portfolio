import { React, useState } from 'react'
import projectsData from './projects.json'
import '../styles/projects.scss'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


function Projects() {
    const [showmore, setShowmore] = useState(false);
    // const projectsDataShown = (showmore ? projectsData : projectsData.slice(0, 4))
    const sectionHeight = 
    window.innerWidth < 426 ?
    {height: `${projectsData.length * 13}rem`,}
    : {height: `${Math.ceil(projectsData.length/ 2) * 12}rem`,};
    
    return (
        <section id="projects-section" className='scroll-section'>
            <h2>Projects 👾</h2>
            <div style={showmore ? sectionHeight : {}} id="projects-list" className={showmore ? 'showingmore' : ''}>
            {
                projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
            </div>
            <div id="show-more">
                <p onClick={() => (setShowmore(!showmore))}>
                    {
                        showmore ?
                        <>Show less projects <FontAwesomeIcon icon={faAngleUp} /></>
                        : <>Show more projects <FontAwesomeIcon icon={faAngleDown} /></>
                    }
                </p>
            </div>
        </section>
  )
}

export default Projects

