// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Simple Navbar (Client Component)
 * - menampilkan brand, navigasi, input search, dan cart count (local demo)
 * - 'use client' wajib karena kita pakai useState & event handlers
 */

export default function Navbar() {
  // lokal state untuk search input
  const [query, setQuery] = useState<string>("");

  // contoh state cartCount (demo). Nanti bisa diganti dengan global store (Zustand/Context)
  const [cartCount, setCartCount] = useState<number>(0);

  // contoh: baca cartCount dari localStorage saat mount (demo)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("mini_cart_count");
      if (raw) setCartCount(Number(raw));
    } catch (e) {
      // ignore if SSR/localStorage not available
    }
  }, []);

  // demo: fungsi untuk menambah cart count (dipakai misal saat add-to-cart)
  const addToCartDemo = () => {
    const next = cartCount + 1;
    setCartCount(next);
    try {
      localStorage.setItem("mini_cart_count", String(next));
    } catch (e) {}
  };

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            🛍️ MiniStore
          </Link>

          {/* Primary nav links */}
          <div className="hidden md:flex items-center gap-3 ml-6">
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>
        </div>

        {/* Search (client-side) */}
        <div className="flex-1 max-w-xl mx-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Search products"
          />
        </div>

        {/* Actions: demo cart + add demo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => addToCartDemo()}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
            title="Demo add to cart"
          >
            Add demo
          </button>

          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 px-3 py-1 border rounded hover:bg-gray-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span className="text-sm">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
