import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import FloatingWhatsApp from "./Components/Common/FloatingWhatsApp";

import Loader from "./Components/Common/Loader";

import YouTubeSection from "./Components/Youtube/YouTubeSection";

import Home from "./Page/Home";
import About from "./Page/About";
import Courses from "./Page/Courses";
import MobileAppSection from "./Components/MobileApp/MobileAppSection";
import LawAspirantsSection from "./Components/LawAspirants/LawAspirantsSection";
import Contact from "./Page/Contact";
import ScrollToTop from "./Components/Common/ScrollToTop";
import PrivacyPolicy from "./Components/Common/PrivacyPolicy";
import TermsOfService from "./Components/Common/TermsOfService";



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust duration as needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/youtube" element={<YouTubeSection />} />
            <Route path="/mobile-app" element={<MobileAppSection />} />
            <Route path="/law" element={<LawAspirantsSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>

          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />

          <Footer />
        </>
      )}
    </>
  );
};

export default App;