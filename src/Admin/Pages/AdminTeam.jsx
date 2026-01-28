import React, { useEffect, useState } from "react";

const AdminTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/team");
        const data = await res.json();
        setTeam(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this team member?")) return;

    try {
      const token = localStorage.getItem("adminToken");

      await fetch(`http://localhost:5000/api/team/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTeam((prev) => prev.filter((member) => member._id !== id));
    } catch (error) {
      alert("Failed to delete member");
    }
  };

  if (loading) return <p>Loading team...</p>;

  return (
    <div className="p-6 bg-amber-50">
      <h2 className="text-2xl font-bold mb-4">Team Members</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member) => (
            <tr key={member._id}>
              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.role}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeam;
