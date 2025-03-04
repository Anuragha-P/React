import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    // Simulate login logic
    if (email === "user@example.com" && password === "password") {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "5px", padding: "10px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "5px", padding: "10px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ margin: "10px", padding: "10px" }}>
        Login
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;