import React from 'react'
import { useState } from 'react'
import '../styles/experience.scss'
import TabContent from './TabContent';
import experienceData from './experience.json'

function Experience() {
    const [ selectedTab, setSelectedTab ] = useState('tech');

    return (
        <section id="experience-section">
            <h2>Experience</h2>
            <div>
            <ul id="tabs-menu">
            {
                experienceData.map((group) => (
                        <li
                        key={group.id}
                        id={group.id}
                        className={(selectedTab == group.id) ? 'selected' : ''}
                        onClick={() => setSelectedTab(group.id)}>
                            {group.name}
                        </li>
            ))}
            </ul>
            {experienceData.map((group) => (
                selectedTab == group.id &&
                <TabContent key={group.id} group={group} />
            ))}
            </div>
        </section>
    )
}

export default Experience
