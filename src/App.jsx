import React from 'react'

// import Header from './Header'
import Footer from './Footer'
import Banner from './Banner/Banner'
import About from './About'
import Projects from './Projects/Projects'
import Navbar from './Navbar'



function App() {
  return (
    <body>
        <Navbar />
        <Banner />
        <main>
          <About />
          <Projects />
        </main>
        <Footer />
    </body>  
  )
}

export default App
