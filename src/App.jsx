import React from 'react'

// import Header from './Header'
import Footer from './Footer'
import Banner from './Banner/Banner'
import About from './About'
import Experience from './Experience/Experience'
import Navbar from './Navbar'
import Projects from './Projects/Projects'



function App() {
  return (
    <body>
        <Navbar />
        <Banner />
        <main>
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
    </body>  
  )
}

export default App
