import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null); //for error management
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  //sending data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", Inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>

      <form>
        <input
          required
          placeholder="Email"
          name="email"
          type="text"
          onChange={handleChange}
        />
        <input
          required
          placeholder="UserName"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <input
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
        {err && <p style={{ color: "red" }}>{err}</p>}
      </form>
    </div>
  );
};

export default Register;
