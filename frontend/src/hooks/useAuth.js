import { useEffect, useState } from "react";
import { login, register } from "../api/auth";

export const useAuth = () => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
  });

  useEffect(() => {
    console.log("Updated auth:", auth.token, auth.role);
  }, [auth.token, auth.role]);

  const handleLogin = async (username, password) => {
    const data = await login(username, password);
    localStorage.setItem("token", `Bearer ${data.token}`);
    localStorage.setItem("role", data.role);
    setAuth({ token: `Bearer ${data.token}`, role: data.role });
    console.log("Data from login:", data);
  };

  const handleRegister = async (username, password, role) => {
    await register(username, password, role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, role: null });
  };

  return { auth, handleLogin, handleLogout, handleRegister };
};
