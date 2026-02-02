import { API_ADMIN_URL } from './api.js';

export const adminLogin = async (email, password) => {
  try {
    console.log('Attempting login to:', `${API_ADMIN_URL}/login`);
    
    const response = await fetch(`${API_ADMIN_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error response:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: `HTTP error! status: ${response.status}` };
      }
      
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login successful:', data);

    localStorage.setItem("adminToken", data.token);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    
    // Handle different types of errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to server. Please check if the backend is running and CORS is configured properly.');
    }
    
    if (error.message.includes('CORS')) {
      throw new Error('CORS error: Please ensure the backend allows requests from this domain.');
    }
    
    throw error;
  }
};
