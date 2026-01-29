import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!title || !description || !price) {
        setError("Please fill all required fields");
        return;
      }

      const token = localStorage.getItem("adminToken");

      if (!token) {
        setError("Not authenticated. Please login first.");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", Number(price));
      if (image) {
        formData.append("image", image);
      }

      const res = await fetch("http://localhost:5000/api/admin/courses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add course");
      }

      alert("Course added successfully");
      navigate("/admin/courses");

    } catch (error) {
      setError(error.message || "An error occurred");
      alert(error.message);
    }
  };

  return (
    <div className="p-6 bg-amber-50 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

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

        <div>
          <label className="block text-sm font-medium mb-2">Course Image (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full border px-4 py-2 rounded"
          />
          {image && <p className="text-sm text-green-600 mt-2">✓ Image selected: {image.name}</p>}
        </div>

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
