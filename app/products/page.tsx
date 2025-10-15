'use client'; //move fetch to client method

import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import MainLayout from "../layouts/MainLayout";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <MainLayout>
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
          <img src={p.image} alt={p.title} className="h-40 mx-auto object-contain" />
          <h3 className="mt-2 text-sm font-semibold line-clamp-2">{p.title}</h3>
          <p className="text-blue-500 font-bold mt-1">${p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </MainLayout>
  );
}
