"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col relative z-10 text-center">
      <div className="w-full h-full bg-black absolute top-0 right-0 -z-10 opacity-50"></div>
      <h1 className=" text-white text-4xl md:text-8xl font-bold">
        Welcome To World Cricket
      </h1>
      <Image
        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of cricket"
        // fill={true}
        width={500}
        height={500}
        layout="responsive"
        className="-z-20 absolute top-0 left-0 min-h-screen min-w-max"
        // style={{ maxWidth: "100%" }}
      />
      <div className="flex gap-2 items-center mt-4 flex-wrap justify-center">
        <Link href="/play">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[220px]">
            Play Agains Computer
          </button>
        </Link>
        <button
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[220px] ${
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
