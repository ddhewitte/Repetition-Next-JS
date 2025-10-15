"use client";


import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart } = useCart();
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center bg-gray-900 text-white p-4">
      <Link href="/" className="font-bold text-lg">
        MiniShop 🛒
      </Link>
      <nav className="flex gap-4">
        <Link href="/products">Products</Link>
        <Link href="/cart">
          Cart ({count})
        </Link>
      </nav>
    </header>
  );
}
