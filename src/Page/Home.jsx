import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import WhyLearnLogix from '../Components/Home/WhyLearnLogix'
import Programs from '../Components/Home/Programs'
import HowItWorks from '../Components/Home/HowItWorks'
import Platforms from '../Components/Home/Platforms'
import LawSpotlight from '../Components/Home/LawSpotlight'
import AboutPreview from '../Components/Home/AboutPreview'
import FinalCTA from '../Components/Home/FinalCTA'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyLearnLogix />
      <Programs />
      <HowItWorks />
      <Platforms />
      <LawSpotlight />
      <AboutPreview />
      <FinalCTA />
    </div>
  )
}

export default Home
