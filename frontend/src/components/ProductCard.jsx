import React from "react";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product = {}, onAddWatch }) {
  return (
    <div className="bg-white border rounded p-3 shadow-sm">
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.brand}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-lg font-bold">{formatPrice(product.price)}</div>
        <div>
          <button
            onClick={() => onAddWatch?.(product)}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}
