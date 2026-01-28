import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-3">
          <Link to="/admin/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/courses" className="block hover:underline">
            Courses
          </Link>
          <Link to="/admin/courses/add" className="block hover:underline">
            Add Course
          </Link>
          <Link to="/admin/team" className="block hover:underline">
            Team Members
            </Link>
            <Link to="/admin/team/add" className="block hover:underline">
            Add Team Member
            </Link>

          <button
            onClick={handleLogout}
            className="mt-6 text-left text-red-400 hover:underline"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
