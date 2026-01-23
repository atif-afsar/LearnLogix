import React from "react";
import useSEO from "../Components/Common/useSEO";
import CoursesHero from "../Components/Courses/CoursesHero";
import CourseCategories from "../Components/Courses/CourseCategories";
import PlatformsCTA from "../Components/Courses/PlatformsCTA";
import CoursesCTA from "../Components/Courses/CoursesCTA";

const Courses = () => {
  useSEO({
    title:
      "Courses at LearnLogix – Class 11 & 12, CUET UG/PG & Law Preparation",
    description:
      "Explore LearnLogix courses for Class 11 & 12 students, CUET UG/PG and Law aspirants. Concept-based, exam-oriented learning through YouTube and mobile app.",
  });

  return (
    <main>
      <CoursesHero />
      <CourseCategories />
      <PlatformsCTA />
      <CoursesCTA />
    </main>
  );
};

export default Courses;
