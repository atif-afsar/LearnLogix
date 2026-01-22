import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Loader from "./Components/Common/Loader";
import FloatingWhatsApp from "./Components/Common/FloatingWhatsApp";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Page/Home"));
const About = lazy(() => import("./Page/About"));
const Courses = lazy(() => import("./Page/Courses"));
const Contact = lazy(() => import("./Page/Contact"));

const YouTubeSection = lazy(() =>
  import("./Components/Youtube/YouTubeSection")
);
const MobileAppSection = lazy(() =>
  import("./Components/MobileApp/MobileAppSection")
);
const LawAspirantsSection = lazy(() =>
  import("./Components/LawAspirants/LawAspirantsSection")
);

const PrivacyPolicy = lazy(() =>
  import("./Components/Common/PrivacyPolicy")
);
const TermsOfService = lazy(() =>
  import("./Components/Common/TermsOfService")
);




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
  <Navbar />
  <ScrollToTop />

  <AnimatePresence mode="wait">
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  </AnimatePresence>

 <Suspense fallback={null}>
  <FloatingWhatsApp />
</Suspense>

  <Footer />
</>
  );
};

export default App;