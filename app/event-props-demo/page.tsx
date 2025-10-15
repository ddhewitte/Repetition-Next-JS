'use client';

import { useState } from "react";
import CounterButton from "../components/CounterButton";

export default function PropsEventDemo() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold">🎯 Latihan Props + Event (Child → Parent)</h1>

      <CounterButton
        onAdd={handleAdd}
        onSubtract={handleSubtract}
        count={count}
      />

      <p className="text-gray-700">Nilai saat ini: {count}</p>
    </main>
  );
}
