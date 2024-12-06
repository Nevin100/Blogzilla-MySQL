//creation of a context to use these function throught out the components:

import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import axios from "axios";

//exporting function authprovider and children as prop
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    //fetching the currentuser and parsing string back to object from localstorage
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs
      ); //getting the response from the backend and setting currentuser
      const sanitizedUser = {
        //for avoidind circular type errors in auth
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        token: res.data.token,
      };
      setCurrentUser(sanitizedUser);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const logout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } catch (error) {
      console.error("Error saving user to localStorage:", error);
    }
  }, [currentUser]);

  return (
    // returning the context with the values of the functions and the current user
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
