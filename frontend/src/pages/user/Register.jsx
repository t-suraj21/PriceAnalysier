import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const user = { id: Date.now(), name, email, role: "user" };
    login(user);
    nav("/");
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full border px-3 py-2 rounded" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full border px-3 py-2 rounded" />
        <button className="w-full bg-green-600 text-white px-4 py-2 rounded">Create account</button>
      </form>
    </div>
  );
}
