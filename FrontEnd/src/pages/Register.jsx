import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input className="" required placeholder="Email" type="text" />
        <input className="" required placeholder="UserName" type="text" />
        <input className="" required placeholder="Password" type="password" />
        <span className="">
          Already have an account?? {"  "}
          <Link to="/login">Login</Link>
        </span>
        <button>Register</button>
        <p>This is an error</p>
      </form>
    </div>
  );
};

export default Register;
