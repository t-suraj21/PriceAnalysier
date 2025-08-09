import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

/* Simple dummy login: enter any name/email; enter 'admin' as email to get admin role */
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name: name || "User",
      email,
      role: email === "admin" ? "admin" : "user",
    };
    login(user);
    nav("/");
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Email (enter 'admin' for admin role)"
        />
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      <p className="mt-3 text-sm">
        Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
      </p>
    </div>
  );
}
