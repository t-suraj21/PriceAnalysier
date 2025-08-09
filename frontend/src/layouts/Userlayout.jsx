import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/search", label: "Search" },
    { path: "/watchlist", label: "Watchlist" },
    { path: "/compare", label: "Compare" },
    { path: "/profile", label: "Profile" },
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

export default UserLayout;
