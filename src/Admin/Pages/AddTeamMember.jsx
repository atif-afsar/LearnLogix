import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const AddTeamMember = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");

      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("image", imageFile);

      const res = await fetch("http://localhost:5000/api/team", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add team member");
      }

      alert("Team member added successfully");
      navigate("/admin/team");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl bg-amber-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Team Member</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />

        {/* Image Upload */}
        <label className="block w-full">
          <div
            className={`flex items-center justify-between gap-4 cursor-pointer
              border rounded-lg px-4 py-3 transition
              ${
                imagePreview
                  ? "border-green-500 bg-green-50"
                  : "border-dashed border-gray-400 hover:border-black"
              }`}
          >
            <div className="flex items-center gap-2">
              {imagePreview && (
                <CheckCircle size={18} className="text-green-600" />
              )}
              <span className="text-sm text-gray-600">
                {imagePreview ? "Image selected" : "Select an image"}
              </span>
            </div>

            <span className="bg-black text-white text-sm px-4 py-1.5 rounded-md">
              {imagePreview ? "Change" : "Browse"}
            </span>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              setImageFile(file);
              setImagePreview(URL.createObjectURL(file));
            }}
            className="hidden"
          />
        </label>

        {/* Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-md border"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-2 rounded text-white
            ${loading ? "bg-gray-400" : "bg-black hover:bg-gray-900"}`}
        >
          {loading ? "Adding..." : "Add Member"}
        </button>
      </form>
    </div>
  );
};

export default AddTeamMember;
