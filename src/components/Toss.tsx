import React, { MouseEventHandler } from "react";

interface TossProps {
  readonly handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export default function Toss({ handleSubmit }: TossProps) {
  const style = "border border-white px-4 py-2 rounded-md text-white font-bold";
  return (
    <div className="flex justify-center items-center h-screen w-full gap-4">
      <button className={style} value={"Heads"} onClick={handleSubmit}>
        Heads
      </button>
      <button className={style} value={"Tails"} onClick={handleSubmit}>
        Tails
      </button>
    </div>
  );
}
