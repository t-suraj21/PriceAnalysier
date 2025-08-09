import React from "react";
import Sidebar from "../../components/Sidebar";

const links = [
  { path: "/admin", label: "Overview" },
  { path: "/admin/users", label: "Users" },
  { path: "/admin/products", label: "Products" },
  { path: "/admin/price-analysis", label: "Analytics" },
];

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar items={links} />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Ingestion status: OK</div>
          <div className="bg-white p-4 rounded shadow">Active jobs: 3</div>
          <div className="bg-white p-4 rounded shadow">Users: 123</div>
        </div>
      </main>
    </div>
  );
}
