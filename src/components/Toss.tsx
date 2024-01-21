import React, { MouseEventHandler } from "react";

interface TossProps {
  readonly handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export default function Toss({ handleSubmit }: TossProps) {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        value={"Heads"}
        onClick={handleSubmit}
      >
        Heads
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        value={"Tails"}
        onClick={handleSubmit}
      >
        Tails
      </button>
    </div>
  );
}
