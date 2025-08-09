import React, { useState } from "react";

/* stub users */
const mock = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "user" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "user" },
  { id: 3, name: "Admin", email: "admin", role: "admin" },
];

export default function ManageUsers() {
  const [users, setUsers] = useState(mock);

  const toggleBan = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, banned: !u.banned } : u));
  };

  return (
    <div className="flex">
      <div className="w-64"></div>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Manage Users</h1>
        <div className="bg-white rounded shadow p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-t">
                  <td className="py-2">{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <button onClick={()=>toggleBan(u.id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">
                      {u.banned ? "Unban" : "Ban"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
