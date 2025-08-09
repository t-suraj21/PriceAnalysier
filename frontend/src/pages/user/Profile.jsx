import React from "react";
import useAuth from "../../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Profile</h2>
      {!user && <p className="text-gray-600">No user data.</p>}
      {user && (
        <div className="space-y-2">
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Role:</strong> {user.role}</div>
        </div>
      )}
    </div>
  );
}
