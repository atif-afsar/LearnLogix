// Centralized API configuration for admin panel
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://learnlogix-backend.onrender.com";
const API_ADMIN_URL = import.meta.env.VITE_API_ADMIN_URL || `${API_BASE_URL}/api/admin`;

export { API_BASE_URL, API_ADMIN_URL };