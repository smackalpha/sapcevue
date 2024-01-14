// components/Login.js
import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  const handleLogin = () => {
    // Perform basic validation (you can enhance this as needed)
    if (username && password) {
      // Simulate successful login for now
      onLogin(username);
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="app-container">
      <div className="login-container ">
        <h2>Login to SpaceVue</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
