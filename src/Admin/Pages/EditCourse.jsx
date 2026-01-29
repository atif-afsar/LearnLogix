import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  Loader,
  DollarSign,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();

        const course = data.find((c) => c._id === id);
        if (!course) {
          setError("Course not found");
          setTimeout(() => navigate("/admin/courses"), 2000);
          return;
        }

        setTitle(course.title);
        setDescription(course.description);
        setPrice(course.price);
      } catch (err) {
        setError("Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      if (!title.trim() || !description.trim() || !price) {
        setError("Please fill all required fields");
        setSaving(false);
        return;
      }

      if (isNaN(price) || parseFloat(price) < 0) {
        setError("Please enter a valid price");
        setSaving(false);
        return;
      }

      const token = localStorage.getItem("adminToken");

      const res = await fetch(`http://localhost:5000/api/admin/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          price: Number(price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }

      navigate("/admin/courses");
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader size={32} className="text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600">Loading course...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <button
          onClick={() => navigate("/admin/courses")}
          className="p-2 hover:bg-gray-200 rounded-lg transition"
          title="Go back"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen size={32} className="text-blue-600" />
            Edit Course
          </h1>
          <p className="text-gray-600 mt-2">Update course details and pricing</p>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Course Title *
            </label>
            <input
              type="text"
              placeholder="e.g., Advanced JavaScript Programming"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={saving}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">
              Update the course title
            </p>
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Course Description *
            </label>
            <textarea
              placeholder="Describe what students will learn in this course..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              disabled={saving}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {description.length}/500 characters
            </p>
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Price (₹) *
            </label>
            <div className="relative">
              <DollarSign
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                disabled={saving}
                step="0.01"
                min="0"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Update the course price in Indian Rupees
            </p>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving && <Loader size={20} className="animate-spin" />}
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/courses")}
              disabled={saving}
              className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
