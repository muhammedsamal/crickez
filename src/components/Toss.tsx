import React, { MouseEventHandler } from "react";
import Image from "next/image";

interface TossProps {
  readonly handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export default function Toss({ handleSubmit }: TossProps) {
  const style = "bg-green-400 py-4 text-xl rounded-md w-full shadow-md mb-4";

  return (
    <div className="flex flex-col items-center h-screen w-full px-8 py-8">
      <h1 className="text-3xl mb-20 mt-10">Call your Toss</h1>
      <div className="w-full h-[25vh] relative mb-20">
        <Image src="/toss.svg" layout="fill" objectFit="contain" alt="toss" />
      </div>
      <button className={style} value={"Heads"} onClick={handleSubmit}>
        Heads
      </button>
      <button className={style} value={"Tails"} onClick={handleSubmit}>
        Tails
      </button>
    </div>
  );
}
