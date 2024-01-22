"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col text-center to-white">
      <h1 className="text-4xl md:text-8xl font-bold">
        Welcome To World Cricket
      </h1>
      <div className="flex gap-2 items-center mt-4 flex-wrap justify-center">
        <Link href="/play">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[220px]">
            Play Agains Computer
          </button>
        </Link>
        <button
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[220px] ${
            isHovered ? "hovered" : ""
          }`}
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
