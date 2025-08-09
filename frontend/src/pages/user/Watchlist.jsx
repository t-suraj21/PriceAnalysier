import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function Watchlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("tt_watchlist");
    setItems(raw ? JSON.parse(raw) : []);
  }, []);

  const remove = (id) => {
    const next = items.filter(i => i.id !== id);
    setItems(next);
    localStorage.setItem("tt_watchlist", JSON.stringify(next));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Watchlist</h2>
      {!items.length && <div className="text-gray-600">No items in watchlist.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="relative">
            <ProductCard product={item} />
            <button onClick={()=>remove(item.id)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
