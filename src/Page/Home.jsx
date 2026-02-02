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
  // Comprehensive SEO with structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://learnlogix.com/#organization",
        "name": "LearnLogix",
        "url": "https://learnlogix.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://learnlogix.com/images/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Pan-India online education platform for Class 11 & 12 students, CUET UG/PG and Law aspirants",
        "sameAs": [
          "https://www.youtube.com/@learnlogix",
          "https://www.instagram.com/learnlogix",
          "https://www.facebook.com/learnlogix"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://learnlogix.com/#website",
        "url": "https://learnlogix.com",
        "name": "LearnLogix",
        "description": "Online Learning Platform for Class 11 & 12, CUET & Law Aspirants",
        "publisher": {
          "@id": "https://learnlogix.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://learnlogix.com/courses?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://learnlogix.com/#educational-org",
        "name": "LearnLogix",
        "url": "https://learnlogix.com",
        "description": "Leading online education platform specializing in Class 11 & 12, CUET preparation, and Law entrance exams",
        "educationalCredentialAwarded": "Course Completion Certificates",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "LearnLogix Courses",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "Class 11 & 12 Preparation",
              "description": "Comprehensive preparation for Class 11 and 12 students",
              "provider": {
                "@id": "https://learnlogix.com/#organization"
              }
            },
            {
              "@type": "Course",
              "name": "CUET UG/PG Preparation",
              "description": "Complete CUET preparation with concept clarity and exam orientation",
              "provider": {
                "@id": "https://learnlogix.com/#organization"
              }
            },
            {
              "@type": "Course",
              "name": "Law Entrance Preparation",
              "description": "Specialized preparation for law entrance examinations",
              "provider": {
                "@id": "https://learnlogix.com/#organization"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What courses does LearnLogix offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LearnLogix offers comprehensive online courses for Class 11 & 12 students, CUET UG/PG preparation, and Law entrance exam preparation with concept clarity and exam orientation."
            }
          },
          {
            "@type": "Question",
            "name": "How can I access LearnLogix courses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can access LearnLogix courses through our YouTube channel and mobile app, providing flexible learning options for students across India."
            }
          },
          {
            "@type": "Question",
            "name": "Is LearnLogix suitable for CUET preparation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, LearnLogix specializes in CUET UG and PG preparation with expert faculty, comprehensive study materials, and exam-oriented approach."
            }
          }
        ]
      }
    ]
  };

  useSEO({
    title: "LearnLogix – Online Learning for Class 11 & 12, CUET & Law Aspirants",
    description: "LearnLogix is a Pan-India online education platform for Class 11 & 12 students, CUET UG/PG and Law aspirants. Learn via our YouTube channel and mobile app with strong concept clarity and exam orientation.",
    keywords: "LearnLogix, Class 11 online coaching, Class 12 online coaching, CUET preparation, CUET UG, CUET PG, Law entrance exam preparation, online education India, competitive exam preparation",
    ogTitle: "LearnLogix – Smart Learning for Competitive Exams",
    ogDescription: "Pan-India online education platform for Class 11 & 12, CUET UG/PG and Law aspirants. Learn with clarity, exam orientation, and career guidance.",
    ogImage: "https://learnlogix.com/images/learnlogix-og.png",
    canonical: "https://learnlogix.com/",
    structuredData
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
