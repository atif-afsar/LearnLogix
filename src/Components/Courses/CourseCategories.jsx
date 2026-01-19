import CourseCard from "./CourseCard";

export default function CourseCategories() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Class 11–12 */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Class 11 & 12 –{" "}
            <span className="text-yellow-400">Commerce & Humanities</span>
          </h2>

          <div className="grid gap-6
                          sm:grid-cols-2
                          lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <CourseCard
              title="Commerce"
              badge="Class 11–12"
              subjects={["Accountancy", "Business Studies", "Economics"]}
            />
            <CourseCard
              title="Humanities"
              badge="Class 11–12"
              subjects={["History", "Political Science", "Sociology"]}
            />
          </div>
        </div>

        {/* CUET */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            CUET <span className="text-yellow-400">UG & PG</span>
          </h2>

          <div className="grid gap-6
                          sm:grid-cols-2
                          lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <CourseCard
              title="CUET UG"
              badge="Entrance Prep"
              subjects={["Domain Subjects", "General Test", "Language"]}
            />
            <CourseCard
              title="CUET PG"
              badge="Post Graduation"
              subjects={["Commerce", "Humanities", "Social Sciences"]}
            />
          </div>
        </div>

        {/* Law */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Law <span className="text-yellow-400">Aspirants</span>
          </h2>

          <div className="grid gap-6
                          sm:grid-cols-2
                          lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <CourseCard
              title="BA LL.B Foundation"
              badge="Law"
              subjects={[
                "Legal Aptitude",
                "Logical Reasoning",
                "Legal Awareness",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
