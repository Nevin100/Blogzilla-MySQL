import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //sending data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        Inputs
      );
      console.log(res);
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
    }
  };

  console.log(Inputs);
  return (
    <div className="auth">
      <h1>Register</h1>

      <form>
        <input
          className=""
          required
          placeholder="Email"
          name="email"
          type="text"
          onChange={handleChange}
        />
        <input
          className=""
          required
          placeholder="UserName"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <input
          className=""
          required
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <span className="">
          Already have an account?? {"  "}
          <Link to="/login">Login</Link>
        </span>
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error</p>
      </form>
    </div>
  );
};

export default Register;
