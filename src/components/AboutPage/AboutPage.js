import React from 'react'
import Navbar from '../utils/Navbar'
import AboutHero    from './AboutHero'
import AboutStrategy    from './AboutStrategy'
import AboutTeam    from './AboutTeam'
import Footer from '../utils/Footer'

const AboutPage = () => {
  return (
    <div>
      <Navbar /> 
      <AboutHero />
      <AboutStrategy />
      <AboutTeam />
      <Footer />
    </div>
  )
}

export default AboutPage
