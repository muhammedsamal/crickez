"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const style =
    "border border-green-500  text-green-500 font-bold py-2 px-4 rounded w-[220px] hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out";

  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col text-center bg-white">
      <h1 className="text-4xl md:text-8xl font-bold text-green-600">
        Welcome To World Cricket
      </h1>
      <div className="flex gap-2 items-center mt-4 flex-wrap justify-center">
        <Link href="/play">
          <button className={style}>Play Agains Computer</button>
        </Link>
        <button
          className={`${style} ${isHovered ? "hovered" : ""}`}
          title="Coming Soon..."
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? "Coming Soon..." : "Play Agains Friend"}
        </button>
      </div>
    </div>
  );
}
