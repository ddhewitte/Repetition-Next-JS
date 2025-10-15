'use client';

import { useState } from "react";

export default function EventDemo() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // Fungsi event handler
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">🎯 Latihan Event Handling</h1>

      {/* Input */}
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Ketik namamu..."
          className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300"
        />
        <p className="text-gray-700">
          Halo, <span className="font-semibold">{name || "Anonim"}</span>!
        </p>
      </div>

      {/* Tombol */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Klik Saya ({count})
        </button>
        <p>Jumlah klik: {count}</p>
      </div>
    </main>
  );
}
