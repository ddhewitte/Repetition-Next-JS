'use client';

import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  inStock?: boolean; // optional props
}

export default function ProductCard({ name, price, inStock = true }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">Harga: Rp {price.toLocaleString('id-ID')}</p>
      <p
        className={`text-sm font-medium ${
          inStock ? "text-green-600" : "text-red-500"
        }`}
      >
        {inStock ? "Tersedia" : "Stok Habis"}
      </p>
    </div>
  );
}
