'use client';

import { useCart } from '../context/CartContext';
import MainLayout from "../layouts/MainLayout";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="text-center mt-10">Your cart is empty 🛍️</p>;

  return (
    <MainLayout>
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">${item.price}</p>
              <p className="text-sm text-gray-700">Qty: {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
    </MainLayout>
  );
}
