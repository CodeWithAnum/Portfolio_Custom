import React from 'react'
import Hero from './components/hero/page'
import Navbar from './components/navbar/page'
import Footer from './components/footer/page'
import About from './components/about/page'
import Contact from './components/contact/page'
import Skill from './components/Skills/page'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
