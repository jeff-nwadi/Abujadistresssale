import React from 'react'
import Header from './Header'
import Feature from '@/components/FeatureSection'
import Carousel from './Carousel'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <main>
        <Header />
        <Feature />
        <Carousel />
        <Footer />
    </main>
  )
}

export default LandingPage
