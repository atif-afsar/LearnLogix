import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, Plus, AlertCircle, Loader } from "lucide-react";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();

    // Subscribe to server-sent events for live updates
    const es = new EventSource("http://localhost:5000/api/courses/stream");

    es.addEventListener("create", (e) => {
      try {
        const newCourse = JSON.parse(e.data);
        setCourses((prev) => [newCourse, ...prev]);
      } catch (err) {
        console.error("Invalid create event data", err);
      }
    });

    es.addEventListener("update", (e) => {
      try {
        const updated = JSON.parse(e.data);
        setCourses((prev) =>
          prev.map((c) => (c._id === updated._id ? updated : c))
        );
      } catch (err) {
        console.error("Invalid update event data", err);
      }
    });

    es.addEventListener("delete", (e) => {
      try {
        const { id } = JSON.parse(e.data);
        setCourses((prev) => prev.filter((c) => c._id !== id));
      } catch (err) {
        console.error("Invalid delete event data", err);
      }
    });

    es.onerror = (err) => {
      console.error("SSE error:", err);
    };

    return () => {
      es.close();
    };
  }, []);

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this course? This action cannot be undone."
      )
    )
      return;

    setDeleting(id);
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`http://localhost:5000/api/admin/courses/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete");

      setCourses((prev) => prev.filter((course) => course._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete course");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Courses</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Manage all your courses ({courses.length} total)
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/courses/add")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          <Plus size={20} />
          <span>Add Course</span>
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
          <Loader size={40} className="text-blue-600 animate-spin mb-4" />
          <p className="text-sm sm:text-base text-gray-600">Loading courses...</p>
        </div>
      ) : courses.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 sm:p-12 text-center">
          <AlertCircle size={40} className="mx-auto text-gray-400 mb-4 sm:mb-6" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            No courses yet
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Create your first course to get started
          </p>
          <button
            onClick={() => navigate("/admin/courses/add")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <Plus size={18} />
            Create Course
          </button>
        </div>
      ) : (
        /* Table */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Created
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {courses.map((course, index) => (
                  <tr
                    key={course._id}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900 line-clamp-1">
                          {course.title}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                          {course.description}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      ₹{course.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(course.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/courses/edit/${course._id}`)
                          }
                          className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-200 font-medium text-sm"
                          title="Edit course"
                        >
                          <Edit size={16} />
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(course._id)}
                          disabled={deleting === course._id}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-200 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete course"
                        >
                          {deleting === course._id ? (
                            <Loader size={16} className="animate-spin" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
