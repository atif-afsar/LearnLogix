import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch("http://localhost:5000/api/admin/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          price: Number(price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add course");
      }

      alert("Course added successfully");
    navigate("/admin/courses");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 bg-amber-50 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
