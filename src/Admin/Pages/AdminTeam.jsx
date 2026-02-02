import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Trash2,
  AlertCircle,
  Loader,
  Users,
  ArrowLeft,
} from "lucide-react";
import { API_BASE_URL } from "../Services/api.js";

const AdminTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setError(null);
        const res = await fetch(`${API_BASE_URL}/api/team`);
        if (!res.ok) throw new Error("Failed to load team members");
        const data = await res.json();
        setTeam(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setError(error.message || "Failed to load team members");
        setTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this team member? This action cannot be undone."
      )
    )
      return;

    setDeleting(id);
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${API_BASE_URL}/api/team/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete");

      setTeam((prev) => prev.filter((member) => member._id !== id));
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to delete member");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Dashboard</span>
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-xl">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Team Members
              </h1>
            </div>
            <p className="text-base sm:text-lg text-gray-600">
              Manage all your team members ({team.length} total)
            </p>
          </div>
          <button
            onClick={() => navigate("/admin/team/add")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            <span>Add Member</span>
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm sm:text-base">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 bg-white rounded-xl shadow-sm">
            <Loader className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 animate-spin mb-4" />
            <p className="text-gray-600 text-center text-base sm:text-lg">
              Loading team members...
            </p>
          </div>
        ) : team.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 sm:p-12 lg:p-16 text-center">
            <Users className="w-12 h-12 sm:w-14 sm:h-14 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              No team members yet
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Add your first team member to get started
            </p>
            <button
              onClick={() => navigate("/admin/team/add")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              Add Member
            </button>
          </div>
        ) : (
          /* Grid View for Team Members */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                {/* Member Image */}
                {member.image && (
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Member Info */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 line-clamp-2">
                    {member.role}
                  </p>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(member._id)}
                    disabled={deleting === member._id}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-200 font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deleting === member._id ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTeam;