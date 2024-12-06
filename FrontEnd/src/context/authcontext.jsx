import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs
    );
    setCurrentUSer(res.data);
  };
  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/logout", inputs);
    setCurrentUSer(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContexProvider value={{ currentUser, login, logout }}>
      {children}
    </AuthContexProvider>
  );
};
