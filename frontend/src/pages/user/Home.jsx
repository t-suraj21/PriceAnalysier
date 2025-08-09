import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to TechTrack</h1>
      <p className="text-gray-700 mb-6">Compare prices across merchants and set alerts for price drops.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/search" className="p-6 bg-white rounded shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Search products</h3>
          <p className="text-gray-600">Find the best prices across stores.</p>
        </Link>
        <Link to="/watchlist" className="p-6 bg-white rounded shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Your Watchlist</h3>
          <p className="text-gray-600">Monitor saved products and alerts.</p>
        </Link>
      </div>
    </div>
  );
}
