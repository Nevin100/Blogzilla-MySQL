import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
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
      await axios.post("http://localhost:8800/api/auth/login", Inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          name="username"
          required
          placeholder="UserName"
          type="text"
          onChange={handleChange}
        />
        <input
          required
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <span className="">
          No account?? {"  "}
          <Link to="/register">
            <h5>Register</h5>
          </Link>
        </span>
        <button onClick={handleSubmit}>Login</button>
        {err && <p style={{ color: "red" }}>{err}</p>}
      </form>
    </div>
  );
};

export default Login;
