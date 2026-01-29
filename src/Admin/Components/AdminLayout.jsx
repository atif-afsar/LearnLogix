import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Plus,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/courses", label: "Courses", icon: BookOpen },
    { path: "/admin/courses/add", label: "Add Course", icon: Plus },
    { path: "/admin/team", label: "Team Members", icon: Users },
    { path: "/admin/team/add", label: "Add Member", icon: Plus },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Fixed on mobile, relative on lg+ */}
      <aside
        className={`fixed lg:relative top-0 left-0 z-40 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            LearnLogix
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors lg:hidden"
            aria-label="Toggle sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  isActive(item.path)
                    ? "bg-blue-500 shadow-lg text-white"
                    : "hover:bg-slate-700 text-slate-300 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-600 transition-all duration-200 text-slate-300 hover:text-white text-sm sm:text-base"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20 flex-shrink-0">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition lg:hidden"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex-1">
              Admin Panel
            </h2>
            <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
              Welcome, <span className="font-medium hidden sm:inline">Administrator</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
