import React from 'react'
import { useState } from 'react'
import '../styles/experience.scss'
import TabContent from './TabContent';

function Experience() {
    const [ selectedTab, setSelectedTab ] = useState('tech-tab');
    const menu = [
        {id: 'tech-tab', name: 'Tech', header: 'Header 1', content: [
            'point 1', 'point 2', 'point 3'
        ]},
        {id: 'impact-tab', name: 'Social Impact', header: 'Header 2', content: [
            'point 1', 'point 2', 'point 3'
        ]},
        {id: 'marketing-events-tab', name: 'Events and Marketing', header: 'Header 3', content: ['']}
    ]
    return (
    <section id="experience-section">
        <h2>Experience</h2>
        <div>
            <ul id="tabs-menu">
            {
                menu.map((tab) => (
                    <li id={tab.id} key={tab.id} className={selectedTab == tab.id ? 'selected' : ''} onClick={() => setSelectedTab(tab.id)}>{tab.name}</li>
                ))
            }   
            </ul>
            {
                menu.map((tab) => (
                    tab.id == selectedTab ?
                    <TabContent key={tab.id} tab={tab} />
                    : ''
                ))
            }
        </div>
    </section>
  )
}

export default Experience
