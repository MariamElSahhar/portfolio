import React from 'react'
import '../styles/banner.scss'
import Photo from './Photo'

function Banner() {
  return (
    <header id='banner'>
      <div id="banner-top">
        <Photo/>
      </div>
      <div id="banner-bottom">
        <h2>Hiii I'm Mariam ✨</h2>
        <h1>Front-end developer</h1>
        <h3>I create web apps for social impact projects 🌱</h3>
      </div>
    </header>
  )
}

export default Banner
