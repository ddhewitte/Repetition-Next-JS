'use client';

import React from "react";

interface CounterButtonProps {
  onAdd: () => void;
  onSubtract: () => void;
  count: number;
}

export default function CounterButton({ onAdd, onSubtract, count }: CounterButtonProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onSubtract}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        -
      </button>
      <span className="font-semibold">{count}</span>
      <button
        onClick={onAdd}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}
