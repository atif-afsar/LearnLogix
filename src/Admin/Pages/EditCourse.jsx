import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/courses`);
        const data = await res.json();

        const course = data.find((c) => c._id === id);
        if (!course) {
          alert("Course not found");
          navigate("/admin/courses");
          return;
        }

        setTitle(course.title);
        setDescription(course.description);
        setPrice(course.price);
      } catch (error) {
        alert("Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, navigate]);

  if (loading) return <p className="p-6">Loading...</p>;

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("adminToken");

    const res = await fetch(
      `http://localhost:5000/api/admin/courses/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          price: Number(price),
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Update failed");
    }

    alert("Course updated successfully");
    navigate("/admin/courses");
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Edit Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />

                <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
            Update Course
            </button>

      </form>
    </div>
  );
};

export default EditCourse;
