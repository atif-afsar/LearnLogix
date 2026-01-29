import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CheckCircle,
  Loader,
  Upload,
  DollarSign,
  BookOpen,
  ArrowLeft,
  X,
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

  const removeImage = () => {
    setImage(null);
    setImagePreview("");
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
    <div className="w-full min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => navigate("/admin/courses")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Courses</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-xl">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Add New Course
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Create and publish a new course for your students
              </p>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-red-700 flex-1">{error}</p>
          </div>
        )}

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="space-y-6">
            {/* Title Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Course Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Advanced JavaScript Programming"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
              />
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Give your course a clear, descriptive title
              </p>
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Course Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Describe what students will learn in this course..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                disabled={loading}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed resize-none text-sm sm:text-base"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs sm:text-sm text-gray-500">
                  Provide detailed information about the course content
                </p>
                <p className="text-xs text-gray-400">
                  {description.length}/500
                </p>
              </div>
            </div>

            {/* Price Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Price (₹) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <DollarSign className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  disabled={loading}
                  step="0.01"
                  min="0"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Set the course price in Indian Rupees
              </p>
            </div>

            {/* Image Upload Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Course Image (Optional)
              </label>
              
              {!imagePreview ? (
                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 sm:p-10 text-center hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <div className="flex flex-col items-center">
                      <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mb-3" />
                      <p className="text-sm sm:text-base font-medium text-gray-900 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        PNG, JPG, GIF up to 5MB
                      </p>
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
              ) : (
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden border-2 border-green-500 bg-green-50">
                    <img
                      src={imagePreview}
                      alt="Course preview"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      disabled={loading}
                      className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Image Selected</p>
                      <p className="text-xs text-gray-600 truncate">{image?.name}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {loading && <Loader className="w-5 h-5 animate-spin" />}
                {loading ? "Creating..." : "Create Course"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/courses")}
                disabled={loading}
                className="px-6 py-3 sm:py-3.5 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;