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
    },
    {
      label: "Team Members",
      value: teamCount,
      icon: Users,
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      label: "Active",
      value: "100%",
      icon: TrendingUp,
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: "Last Updated",
      value: "Now",
      icon: Clock,
      color: "amber",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Welcome back! Here's what's happening with your content.
        </p>
      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-40 bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bgColor} rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 ${stat.bgColor} rounded-lg ${stat.iconColor}`}
                  >
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <a
            href="/admin/courses/add"
            className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
          >
            <BookOpen size={28} className="text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
              Add New Course
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Create and publish a new course
            </p>
          </a>
          <a
            href="/admin/team/add"
            className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300 group"
          >
            <Users size={28} className="text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition">
              Add Team Member
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Add a new team member to the platform
            </p>
          </a>
        </div>
      </div>

      {/* Manage Sections */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Manage Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <a
            href="/admin/courses"
            className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Manage Courses</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Edit, delete, and view all courses
                </p>
              </div>
              <BookOpen size={24} className="text-gray-400" />
            </div>
          </a>
          <a
            href="/admin/team"
            className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Manage Team</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Edit, delete, and view all team members
                </p>
              </div>
              <Users size={24} className="text-gray-400" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
