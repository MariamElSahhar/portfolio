import React from 'react'
import '../styles/banner.scss'
import Photo from './Photo'

function Banner() {
  return (
    <header id='banner' className='scroll-section'>
      <div id="banner-top">
        <Photo/>
      </div>
      <div id="banner-bottom">
        <h2>Hiii I'm Mariam ✨</h2>
        <h1>Software Developer</h1>
        <h3>Coding for social impact 🌱</h3>
      </div>
    </header>
  )
}

export default Banner
