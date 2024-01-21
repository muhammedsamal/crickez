import React, { MouseEventHandler } from "react";

interface TossProps {
  readonly handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export default function Toss({ handleSubmit }: TossProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleSubmit}
      >
        Heads
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Tails
      </button>
    </div>
  );
}
