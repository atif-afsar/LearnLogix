import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import OurMission from '../Components/About/OurMission'
import OurVision from '../Components/About/OurVision'
import MeetOurTeam from '../Components/About/Team'
import OurJourney from '../Components/About/OurJourney'
import AboutCTA from '../Components/About/AboutCTA'
const About = () => {
  return (
    <div className="bg-black text-white">
      <AboutHero />
      <OurMission />
      <OurVision />
      <MeetOurTeam />
      <OurJourney />
      <AboutCTA />
    </div>
  )
}

export default About
