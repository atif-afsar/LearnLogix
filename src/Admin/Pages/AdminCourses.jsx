import React, { useEffect, useState } from "react";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  if (loading) {
    return <p className="p-6">Loading courses...</p>;
  }

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this course?")) return;

  try {
    const token = localStorage.getItem("adminToken");

    await fetch(`http://localhost:5000/api/admin/courses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCourses((prev) => prev.filter((course) => course._id !== id));
  } catch (error) {
    console.error(error);
    alert("Failed to delete course");
  }
};


  return (
    <div className="p-6 bg-amber-50">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Created</th>
            <th className="border p-2">Action</th>

          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className="border p-2">{course.title}</td>
              <td className="border p-2">₹{course.price}</td>
              <td className="border p-2">
                {new Date(course.createdAt).toLocaleDateString()}
              </td>
              <td className="border p-2">
                <button
                    onClick={() => handleDelete(course._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourses;
