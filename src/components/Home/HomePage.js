import React from 'react'
import Navbar from '../utils/Navbar'
import Services from '../utils/Services'
import Footer from '../utils/Footer'
import HomeHero from './HomeHero'
import HomeBusiness from './HomeBusiness'
import HomePrice from './HomePrice'

const HomePage = () => {
  return (
    <div>
      <Navbar /> 
      <HomeHero />
      <Services />
      <HomeBusiness />
      <HomePrice />
      <Footer />
    </div>
  )
}

export default HomePage
