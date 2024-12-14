import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../Store/Feature/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Counter Display */}
      <div className="bg-white shadow-md rounded-lg p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Counter: {count}</h1>
        <p className="text-gray-500 mb-6">Use the buttons below to modify the counter.</p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => dispatch(increment())}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Increment by 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
