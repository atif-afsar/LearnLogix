import { BookOpen, GraduationCap, Scale } from "lucide-react";

function CourseCard({ title, badge, subjects, icon: Icon }) {
  return (
    <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-yellow-400/10 rounded-xl group-hover:bg-yellow-400/20 transition-colors">
          {Icon && <Icon className="w-6 h-6 text-yellow-400" />}
        </div>
        <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-400/20">
          {badge}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
        {title}
      </h3>
      
      <div className="space-y-2">
        {subjects.map((subject, idx) => (
          <div key={idx} className="flex items-center gap-2 text-zinc-400 group-hover:text-zinc-300 transition-colors">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <span className="text-sm">{subject}</span>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
}

export default function CourseCategories() {
  const categories = [
    {
      id: "class-11-12",
      title: "Class 11 & 12",
      highlight: "Commerce & Humanities",
      icon: BookOpen,
      courses: [
        {
          title: "Commerce",
          badge: "Class 11–12",
          subjects: ["Accountancy", "Business Studies", "Economics"],
          icon: BookOpen
        },
        {
          title: "Humanities",
          badge: "Class 11–12",
          subjects: ["History", "Political Science", "Sociology"],
          icon: BookOpen
        }
      ]
    },
    {
      id: "cuet",
      title: "CUET",
      highlight: "UG & PG",
      icon: GraduationCap,
      courses: [
        {
          title: "CUET UG",
          badge: "Entrance Prep",
          subjects: ["Domain Subjects", "General Test", "Language"],
          icon: GraduationCap
        },
        {
          title: "CUET PG",
          badge: "Post Graduation",
          subjects: ["Commerce", "Humanities", "Social Sciences"],
          icon: GraduationCap
        }
      ]
    },
    {
      id: "law",
      title: "Law",
      highlight: "Aspirants",
      icon: Scale,
      courses: [
        {
          title: "BA LL.B Foundation",
          badge: "Law",
          subjects: ["Legal Aptitude", "Logical Reasoning", "Legal Awareness"],
          icon: Scale
        }
      ]
    }
  ];

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Explore Our <span className="text-yellow-400">Courses</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of programs designed to help you excel
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {categories.map((category, idx) => (
            <div key={category.id} className="relative">
              
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-yellow-400/10 rounded-lg">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {category.title}{" "}
                  <span className="text-yellow-400">{category.highlight}</span>
                </h2>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.courses.map((course, courseIdx) => (
                  <CourseCard
                    key={courseIdx}
                    title={course.title}
                    badge={course.badge}
                    subjects={course.subjects}
                    icon={course.icon}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              {idx < categories.length - 1 && (
                <div className="absolute -bottom-8 sm:-bottom-10 left-0 right-0 flex justify-center">
                  <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 hover:scale-105 text-sm sm:text-base">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}