import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { API_ADMIN_URL } from "../Services/api.js";

const AdminProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");

      // If no token, immediately deny access
      if (!token) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      // Verify token with backend
      try {
        const response = await fetch(`${API_ADMIN_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setAuthorized(true);
        } else {
          // Token expired or invalid - clear it and deny access
          localStorage.removeItem("adminToken");
          setAuthorized(false);
        }
      } catch (error) {
        // Network error or backend down - deny access for security
        console.error("Auth check failed:", error);
        localStorage.removeItem("adminToken");
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Show loader while checking authentication
  if (loading) {
    return <Loader />;
  }

  // If not authorized, immediately redirect to login
  if (!authorized) {
    return <Navigate to="/admin/login" replace />;
  }

  // Only render children if authorized
  return children;
};

export default AdminProtectedRoute;
