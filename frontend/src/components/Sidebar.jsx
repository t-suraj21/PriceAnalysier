import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ links, isOpen, onClose }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50`}
    >
      {/* Close button on mobile */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-2xl">✖</button>
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-3 py-2 rounded ${
              location.pathname === link.path
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
