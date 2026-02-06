import React from "react";
import useSEO from "../Components/Common/useSEO";
import AboutHero from "../Components/About/AboutHero";
import OurMission from "../Components/About/OurMission";
import OurVision from "../Components/About/OurVision";
import MeetOurTeam from "../Components/About/Team";
import OurJourney from "../Components/About/OurJourney";
import AboutCTA from "../Components/About/AboutCTA";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About LearnLogix",
    "description": "Learn about LearnLogix, a Pan-India online education platform helping Class 11 & 12 students, CUET and Law aspirants achieve academic success.",
    "url": "https://learnlogix.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "LearnLogix",
      "url": "https://learnlogix.com",
      "description": "LearnLogix is a Pan-India online education platform for Class 11 & 12 students, CUET UG/PG and Law aspirants.",
      "foundingDate": "2020",
      "logo": "https://learnlogix.com/images/logo.png",
      "sameAs": [
        "https://www.youtube.com/@learnlogix",
        "https://www.instagram.com/learnlogix",
        "https://www.facebook.com/learnlogix"
      ]
    }
  };

  useSEO({
    title:
      "About LearnLogix – Trusted Online Education Platform for Students in India",
    description:
      "Learn about LearnLogix, a Pan-India online education platform helping Class 11 & 12 students, CUET and Law aspirants achieve academic success with concept clarity and exam-focused learning.",
    keywords: "About LearnLogix, LearnLogix team, LearnLogix mission, LearnLogix vision, LearnLogix online education",
    ogTitle: "About LearnLogix – Trusted Online Education Platform",
    ogDescription: "Learn about LearnLogix, a Pan-India online education platform helping Class 11 & 12 students, CUET and Law aspirants achieve academic success.",
    ogImage: "https://learnlogix.com/images/logo.png",
    canonical: "https://learnlogix.com/about",
    structuredData
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
