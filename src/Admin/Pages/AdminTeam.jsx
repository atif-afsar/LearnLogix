import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Trash2,
  AlertCircle,
  Loader,
  Users,
} from "lucide-react";

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
        const res = await fetch("http://localhost:5000/api/team");
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

      const res = await fetch(`http://localhost:5000/api/team/${id}`, {
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
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
            <Users size={28} className="text-purple-600" />
            Team Members
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Manage all your team members ({team.length} total)
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/team/add")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          <Plus size={20} />
          <span>Add Member</span>
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex gap-3 items-start">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm sm:text-base">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
          <Loader size={40} className="text-purple-600 animate-spin mb-4" />
          <p className="text-gray-600 text-center text-sm sm:text-base">Loading team members...</p>
        </div>
      ) : team.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 sm:p-12 text-center">
          <Users size={40} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            No team members yet
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Add your first team member to get started
          </p>
          <button
            onClick={() => navigate("/admin/team/add")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
          >
            <Plus size={18} />
            Add Member
          </button>
        </div>
      ) : (
        /* Grid View for Team Members */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md sm:hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Member Image */}
              {member.image && (
                <div className="relative w-full h-32 sm:h-40 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Member Info */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 flex-1 line-clamp-2">{member.role}</p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(member._id)}
                  disabled={deleting === member._id}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-200 font-medium text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleting === member._id ? (
                    <Loader size={14} className="animate-spin" />
                  ) : (
                    <Trash2 size={14} />
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
