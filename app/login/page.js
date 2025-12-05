"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login clicked!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <Link className="nav-link" href="/products"><button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button></Link>
        </form>

        {/* Extra Links */}
        <div className="text-center">
          <p className="mb-1">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary">
              Register
            </Link>
          </p>

          <Link href="/forgot-password" className="text-secondary">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
