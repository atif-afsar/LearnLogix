import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import OurMission from '../Components/About/OurMission'
import OurVision from '../Components/About/OurVision'
import MeetOurTeam from '../Components/About/Team'
const About = () => {
  return (
    <div className="bg-black text-white">
      <AboutHero />
      <OurMission />
      <OurVision />
      <MeetOurTeam />
    </div>
  )
}

export default About
