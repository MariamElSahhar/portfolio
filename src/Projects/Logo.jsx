import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHtml5, faCss3Alt, faSass, faReact, faPhp, faJava, faJs, faPython, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function Logo({ lang }) {
    const logos = [
        {lang: "HTML", icon: faHtml5, text: ""},
        {lang: "CSS", icon: faCss3Alt, text: ""},
        {lang: "SASS", icon: faSass, text: ""},
        {lang: "React", icon: faReact, text: ""},
        {lang: "C", icon: null, text: "C"},
        {lang: "C++", icon: null, text: "C++"},
        {lang: "PHP", icon: faPhp, text: ""},
        {lang: "SQL", icon: faDatabase, text: ""},
        {lang: "Java", icon: faJava, text: ""},
        {lang: "JavaScript", icon: faJs, text: ""},
        {lang: "Python", icon: faPython, text: ""},
        {lang: "MATLAB", icon: null, text: "", img: '/logos/MATLAB.png'},
        {lang: "Bootstrap", icon: faBootstrap, text: ""},
        {lang: "laser", icon: null, text: "", img: '/logos/laser.png'},
        {lang: "illustrator", icon: null, text: "", img: '/logos/illustrator.png'},
    ];
    const selectedLanguage = logos.find((item) => item.lang === lang);

    return (
        <>
            <div className="lang-icon">
            {
                selectedLanguage.icon ?
                (<FontAwesomeIcon icon={selectedLanguage.icon}/>)
                : selectedLanguage.text ?
                (<i>{selectedLanguage.text}</i>)
                : selectedLanguage.img ?
                (<img src={selectedLanguage.img} alt={selectedLanguage.lang}/>)
                : ''
            }
            </div>
            <div className="lang-label">
                <p>{selectedLanguage.lang}</p>
            </div>
        </>
    )
}

export default Logo