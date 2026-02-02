import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { API_ADMIN_URL } from "../Services/api.js";

const AdminProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      setLoading(false);
      return;
    }

    fetch(`${API_ADMIN_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setAuthorized(true);
        } else {
          localStorage.removeItem("adminToken");
        }
      })
      .catch(() => {
        localStorage.removeItem("adminToken");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
 
  if (!authorized) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
