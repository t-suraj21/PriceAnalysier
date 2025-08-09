import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/**
 * role: optional string ('admin' to restrict to admins)
 */
export default function ProtectedRoute({ children, role = null }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}
