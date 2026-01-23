import React from "react";
import useSEO from "../Components/Common/useSEO";
import AboutHero from "../Components/About/AboutHero";
import OurMission from "../Components/About/OurMission";
import OurVision from "../Components/About/OurVision";
import MeetOurTeam from "../Components/About/Team";
import OurJourney from "../Components/About/OurJourney";
import AboutCTA from "../Components/About/AboutCTA";

const About = () => {
  useSEO({
    title:
      "About LearnLogix – Trusted Online Education Platform for Students in India",
    description:
      "Learn about LearnLogix, a Pan-India online education platform helping Class 11 & 12 students, CUET and Law aspirants achieve academic success with concept clarity and exam-focused learning.",
  });

  return (
    <main className="bg-black text-white">
      <AboutHero />
      <OurMission />
      <OurVision />
      <MeetOurTeam />
      <OurJourney />
      <AboutCTA />
    </main>
  );
};

export default About;
