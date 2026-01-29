import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CheckCircle,
  Loader,
  Upload,
  DollarSign,
  FileText,
  BookOpen,
} from "lucide-react";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!title.trim() || !description.trim() || !price) {
        setError("Please fill all required fields");
        setLoading(false);
        return;
      }

      if (isNaN(price) || parseFloat(price) < 0) {
        setError("Please enter a valid price");
        setLoading(false);
        return;
      }

      const token = localStorage.getItem("adminToken");

      if (!token) {
        setError("Not authenticated. Please login first.");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
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

      navigate("/admin/courses");
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <BookOpen size={32} className="text-blue-600" />
          Add New Course
        </h1>
        <p className="text-gray-600 mt-2">
          Create and publish a new course for your students
        </p>
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
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">
              Give your course a clear, descriptive title
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
              disabled={loading}
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
                disabled={loading}
                step="0.01"
                min="0"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Set the course price in Indian Rupees
            </p>
          </div>

          {/* Image Upload Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Course Image (Optional)
            </label>
            <label className="block cursor-pointer">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                  imagePreview
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                }`}
              >
                <div className="flex flex-col items-center">
                  {imagePreview ? (
                    <>
                      <CheckCircle
                        size={32}
                        className="text-green-600 mb-2"
                      />
                      <p className="text-sm font-medium text-gray-900">
                        Image Selected
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{image?.name}</p>
                    </>
                  ) : (
                    <>
                      <Upload size={32} className="text-gray-400 mb-2" />
                      <p className="text-sm font-medium text-gray-900">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={loading}
                  className="hidden"
                />
              </div>
            </label>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-900">Preview</p>
              <img
                src={imagePreview}
                alt="Course preview"
                className="w-full h-48 object-cover rounded-lg border border-gray-200"
              />
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader size={20} className="animate-spin" />}
              {loading ? "Creating..." : "Create Course"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/courses")}
              disabled={loading}
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

export default AddCourse;
