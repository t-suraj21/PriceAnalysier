import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/manage-users", label: "Manage Users" },
    { path: "/admin/manage-products", label: "Manage Products" },
    { path: "/admin/price-analysis", label: "Price Analysis" },
  ];

  return (
    <div className="flex">
      <Sidebar
        links={links}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
