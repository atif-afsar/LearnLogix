import { useEffect, useState } from "react";
import { BookOpen, Users, TrendingUp, Clock } from "lucide-react";

const AdminDashboard = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [coursesRes, teamRes] = await Promise.all([
          fetch("http://localhost:5000/api/courses"),
          fetch("http://localhost:5000/api/team"),
        ]);

        const courses = await coursesRes.json();
        const team = await teamRes.json();

        setCoursesCount(courses.length || 0);
        setTeamCount(team.length || 0);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      label: "Total Courses",
      value: coursesCount,
      icon: BookOpen,
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      label: "Team Members",
      value: teamCount,
      icon: Users,
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      label: "Active",
      value: "100%",
      icon: TrendingUp,
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      label: "Last Updated",
      value: "Now",
      icon: Clock,
      color: "amber",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Welcome back! Here's what's happening with your content.
          </p>
        </div>

        {/* Stats Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-32 sm:h-36 lg:h-40 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`${stat.bgColor} rounded-xl p-5 sm:p-6 border ${stat.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-2.5 sm:p-3 rounded-lg ${stat.iconColor} bg-white shadow-sm`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="/admin/courses/add"
              className="group p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    Add New Course
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Create and publish a new course
                  </p>
                </div>
              </div>
            </a>
            <a
              href="/admin/team/add"
              className="group p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                    Add Team Member
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Add a new team member to the platform
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Manage Sections */}
        <div className="space-y-4 pb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Manage Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="/admin/courses"
              className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    Manage Courses
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Edit, delete, and view all courses
                  </p>
                </div>
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 ml-4" />
              </div>
            </a>
            <a
              href="/admin/team"
              className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    Manage Team
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Edit, delete, and view all team members
                  </p>
                </div>
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 ml-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;