import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Counter</h1>
        <div className="text-6xl font-extrabold mb-6">{count}</div>
        <div className="flex justify-center gap-6">
         
          <button
            onClick={increment}
            disabled={count === 100}
            className={`px-6 py-2 rounded-xl text-lg font-semibold transition ${
              count === 100
                ? 'bg-green-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            + Increment
          </button>
          <button
            onClick={decrement}
            disabled={count === 0}
            className={`px-6 py-2 rounded-xl text-lg font-semibold transition ${
              count === 0
                ? 'bg-red-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
