import React from 'react'
import Navbar from '../utils/Navbar'
import Services from '../utils/Services'
import Footer from '../utils/Footer'
import HomeHero from './HomeHero'
import HomeBusiness from './HomeBusiness'
import HomePrice from './HomePrice'
import HomeApproach from './HomeApproach'
import HomeNextBusiness from './HomeNextBusiness'
import CustomerLogos from '../utils/CustomerLogos'

const HomePage = () => {
  return (
    <div>
      <Navbar /> 
      <HomeHero />
      <Services />
      <HomeBusiness />
      <HomeApproach />
      <HomePrice />
      <HomeNextBusiness />
      <CustomerLogos />
      <Footer />
    </div>
  )
}

export default HomePage
