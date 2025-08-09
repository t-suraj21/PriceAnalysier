import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

/* Example local data used until API is wired */
const mockResults = [
  { id: 1, name: "Phone A", brand: "BrandX", price: 399, image: "/placeholder.png" },
  { id: 2, name: "Phone B", brand: "BrandY", price: 499, image: "/placeholder.png" },
  { id: 3, name: "Phone C", brand: "BrandZ", price: 299, image: "/placeholder.png" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // in real app call API
      setResults(mockResults.filter(r => r.name.toLowerCase().includes(query.toLowerCase())));
      setLoading(false);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products..." className="flex-1 border px-3 py-2 rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
      </form>

      {loading ? <Loader /> : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {results.length ? results.map(p => (
            <ProductCard key={p.id} product={p} onAddWatch={()=>alert("Add to watchlist (stub)")} />
          )) : <div className="text-gray-600">No results. Try searching "Phone".</div>}
        </div>
      )}
    </div>
  );
}
