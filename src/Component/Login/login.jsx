import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const predefinedEmail = "test@example.com";
  const predefinedPassword = "password123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === predefinedEmail && password === predefinedPassword) {
      setMessage("Login successful!");
      // Redirect to the dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); // Delay for user feedback
    } else {
      setMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "10px",
            color: message === "Login successful!" ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
