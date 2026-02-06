import React from "react";
import useSEO from "../Components/Common/useSEO";
import CoursesHero from "../Components/Courses/CoursesHero";
import CourseCategories from "../Components/Courses/CourseCategories";
import CoursesList from "../Components/Courses/CoursesList";
import PlatformsCTA from "../Components/Courses/PlatformsCTA";
import CoursesCTA from "../Components/Courses/CoursesCTA";

const Courses = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LearnLogix Courses",
    "description": "Explore LearnLogix courses for Class 11 & 12 students, CUET UG/PG and Law aspirants",
    "url": "https://learnlogix.com/courses",
    "itemListElement": [
      {
        "@type": "Course",
        "position": 1,
        "name": "Class 11 & 12 Preparation",
        "description": "Comprehensive preparation for Class 11 and 12 students with concept clarity",
        "provider": {
          "@type": "Organization",
          "name": "LearnLogix",
          "url": "https://learnlogix.com"
        },
        "educationalLevel": "High School",
        "courseCode": "LL-CLASS11-12"
      },
      {
        "@type": "Course",
        "position": 2,
        "name": "CUET UG/PG Preparation",
        "description": "Complete CUET preparation with concept clarity and exam orientation",
        "provider": {
          "@type": "Organization",
          "name": "LearnLogix",
          "url": "https://learnlogix.com"
        },
        "educationalLevel": "Undergraduate/Graduate",
        "courseCode": "LL-CUET"
      },
      {
        "@type": "Course",
        "position": 3,
        "name": "Law Entrance Preparation",
        "description": "Specialized preparation for law entrance examinations",
        "provider": {
          "@type": "Organization",
          "name": "LearnLogix",
          "url": "https://learnlogix.com"
        },
        "educationalLevel": "Professional",
        "courseCode": "LL-LAW"
      }
    ]
  };

  useSEO({
    title:
      "Courses at LearnLogix – Class 11 & 12, CUET UG/PG & Law Preparation",
    description:
      "Explore LearnLogix courses for Class 11 & 12 students, CUET UG/PG and Law aspirants. Concept-based, exam-oriented learning through YouTube and mobile app.",
    keywords: "LearnLogix courses, LearnLogix Class 11, LearnLogix Class 12, LearnLogix CUET, LearnLogix Law, online courses LearnLogix",
    ogTitle: "Courses at LearnLogix – Class 11 & 12, CUET & Law Preparation",
    ogDescription: "Explore LearnLogix courses for Class 11 & 12 students, CUET UG/PG and Law aspirants. Concept-based, exam-oriented learning.",
    ogImage: "https://learnlogix.com/images/courses.png",
    canonical: "https://learnlogix.com/courses",
    structuredData
  });

  return (
    <main>
      <CoursesHero />
      <CourseCategories />
      <CoursesList />
      <PlatformsCTA />
      <CoursesCTA />
    </main>
  );
};

export default Courses;
