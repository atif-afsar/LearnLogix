export const adminLogin = async (email, password) => {
  const response = await fetch("http://localhost:5000/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  localStorage.setItem("adminToken", data.token);
  return data;
};
