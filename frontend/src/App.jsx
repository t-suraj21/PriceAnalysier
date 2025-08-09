import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {routes.map((r, i) => {
            const Element = r.element;
            if (r.protectedRoute) {
              return (
                <Route
                  key={i}
                  path={r.path}
                  element={
                    <ProtectedRoute role={r.role ?? null}>
                      {Element}
                    </ProtectedRoute>
                  }
                />
              );
            }
            return <Route key={i} path={r.path} element={Element} />;
          })}
          <Route path="*" element={<div className="p-8">Page not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
