import React from 'react'
import CoursesHero from '../Components/Courses/CoursesHero'
import CourseCategories from '../Components/Courses/CourseCategories'
import PlatformsCTA from '../Components/Courses/PlatformsCTA'
import CoursesCTA from '../Components/Courses/CoursesCTA'

const Courses = () => {
  return (
    <div>
      <CoursesHero />
      <CourseCategories />
      <PlatformsCTA />
      <CoursesCTA />
    </div>
  )
}

export default Courses
