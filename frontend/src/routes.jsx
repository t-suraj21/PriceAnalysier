import React from "react";

/* User pages */
import Home from "./pages/user/Home";
import Search from "./pages/user/Search";
import Watchlist from "./pages/user/Watchlist";
import Compare from "./pages/user/Compare";
import Profile from "./pages/user/Profile";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

/* Admin pages */
import Dashboard from "./pages/admin/Dashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageProducts from "./pages/admin/ManageProduct";
import PriceAnalysis from "./pages/admin/PriceAnalysis";

export default [
  { path: "/", element: <Home />, protectedRoute: false },
  { path: "/login", element: <Login />, protectedRoute: false },
  { path: "/register", element: <Register />, protectedRoute: false },

  { path: "/search", element: <Search />, protectedRoute: false },
  { path: "/watchlist", element: <Watchlist />, protectedRoute: true },
  { path: "/compare", element: <Compare />, protectedRoute: true },
  { path: "/profile", element: <Profile />, protectedRoute: true },

  /* admin (role: admin) */
  { path: "/admin", element: <Dashboard />, protectedRoute: true, role: "admin" },
  { path: "/admin/users", element: <ManageUsers />, protectedRoute: true, role: "admin" },
  { path: "/admin/products", element: <ManageProducts />, protectedRoute: true, role: "admin" },
  { path: "/admin/price-analysis", element: <PriceAnalysis />, protectedRoute: true, role: "admin" },
];
