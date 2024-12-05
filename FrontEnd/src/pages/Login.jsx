import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input className="" required placeholder="UserName" type="text" />
        <input className="" required placeholder="Password" type="password" />
        <span className="">
          No account?? {"  "}
          <Link to="/register">Register</Link>
        </span>
        <button>Login</button>
        <p>This is an error</p>
      </form>
    </div>
  );
};

export default Login;
