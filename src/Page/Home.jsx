import React from "react";
import useSEO from "../Components/Common/useSEO";
import HeroSection from "../Components/Home/HeroSection";
import WhyLearnLogix from "../Components/Home/WhyLearnLogix";
import Programs from "../Components/Home/Programs";
import HowItWorks from "../Components/Home/HowItWorks";
import Platforms from "../Components/Home/Platforms";
import LawSpotlight from "../Components/Home/LawSpotlight";
import AboutPreview from "../Components/Home/AboutPreview";
import FinalCTA from "../Components/Home/FinalCTA";

const Home = () => {
  useSEO({
    title:
      "LearnLogix – Online Learning for Class 11 & 12, CUET & Law Aspirants",
    description:
      "LearnLogix is a Pan-India online education platform for Class 11 & 12 students, CUET UG/PG and Law aspirants. Learn via our YouTube channel and mobile app with strong concept clarity and exam orientation.",
  });

  return (
    <main>
      <HeroSection />
      <WhyLearnLogix />
      <Programs />
      <HowItWorks />
      <Platforms />
      <LawSpotlight />
      <AboutPreview />
      <FinalCTA />
    </main>
  );
};

export default Home;
