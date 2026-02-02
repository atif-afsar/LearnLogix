import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  Loader,
  DollarSign,
  BookOpen,
  ArrowLeft,
  Upload,
  X,
} from "lucide-react";
import { API_BASE_URL, API_ADMIN_URL } from "../Services/api.js";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/courses`);
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
        setCurrentImage(course.image);
      } catch (err) {
        setError("Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file");
      return;
    }

    setNewImage(file);
    setImagePreview(URL.createObjectURL(file));
    setError("");
  };

  const removeNewImage = () => {
    setNewImage(null);
    setImagePreview("");
  };

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
      
      // Use FormData for file upload
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("price", Number(price));
      
      // Only append image if a new one is selected
      if (newImage) {
        formData.append("image", newImage);
      }

      const res = await fetch(`${API_ADMIN_URL}/courses/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't set Content-Type for FormData - browser will set it with boundary
        },
        body: formData,
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
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 p-12">
          <Loader className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 animate-spin mb-4" />
          <p className="text-gray-600 text-base sm:text-lg">Loading course...</p>
        </div>
      </div>
    );
  }

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
                Edit Course
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Update course details and pricing
              </p>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm sm:text-base flex-1">{error}</p>
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
                disabled={saving}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
              />
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Update the course title
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
                disabled={saving}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed resize-none text-sm sm:text-base"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs sm:text-sm text-gray-500">
                  Update the course description
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
                  disabled={saving}
                  step="0.01"
                  min="0"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Update the course price in Indian Rupees
              </p>
            </div>

            {/* Current Image Display */}
            {currentImage && !imagePreview && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Current Image
                </label>
                <div className="relative rounded-xl overflow-hidden border-2 border-gray-200">
                  <img
                    src={currentImage}
                    alt="Current course"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  Upload a new image below to replace this one
                </p>
              </div>
            )}

            {/* Image Upload Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                {currentImage ? "Update Course Image (Optional)" : "Course Image (Optional)"}
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
                      disabled={saving}
                      className="hidden"
                    />
                  </div>
                </label>
              ) : (
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden border-2 border-green-500 bg-green-50">
                    <img
                      src={imagePreview}
                      alt="New course preview"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeNewImage}
                      disabled={saving}
                      className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-green-700 font-medium">
                    ✓ New image selected - will replace current image when saved
                  </p>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {saving && <Loader className="w-5 h-5 animate-spin" />}
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/courses")}
                disabled={saving}
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

export default EditCourse;