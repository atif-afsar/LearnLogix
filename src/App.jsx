import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import YouTubeSection from "./Components/Youtube/YouTubeSection";


import Home from "./Page/Home";
import About from "./Page/About";
import Courses from "./Page/Courses";
import MobileAppSection from "./Components/MobileApp/MobileAppSection";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/youtube" element={<YouTubeSection />} />
        <Route path="/mobile-app" element={<MobileAppSection />} />


      </Routes>

      <Footer />
    </>
  );
};

export default App;
