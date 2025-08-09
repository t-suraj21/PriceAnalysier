import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-blue-700 transition"
        >
          ☰
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TechTrack" className="h-8" />
          <span className="text-lg font-bold">TechTrack</span>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="hidden sm:inline">Hi, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
