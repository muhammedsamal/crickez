import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Landing() {
  const [title, setTitle] = useState("Welcome to Crickex");
  const [isHovered, setIsHovered] = useState(false);
  const [next, setNext] = useState(false);

  const handleSubmit = () => {
    setTitle("Choose your opponent");
    setNext(true);
  };

  const style = "bg-green-400 py-4 text-xl rounded-md mb-2 w-full shadow-md";

  return (
    <div className="flex flex-col bg-green-200 w-full items-center justify-between h-screen">
      <div className="w-full h-[50vh] relative">
        <Image
          src="/cricket.svg"
          layout="fill"
          objectFit="contain"
          alt="hero"
        />
      </div>
      <div className="bg-white h-1/2 w-full flex flex-col p-4">
        <h1 className="text-4xl md:text-8xl leading-normal mb-8">{title}</h1>
        {!next && (
          <button onClick={handleSubmit} className={style}>
            Get Started
          </button>
        )}
        {next ? (
          <div className="flex flex-col gap-2 items-center justify-center">
            <Link className={`text-center ${style}`} href="/play">
              <button className="">Play Agains Computer</button>
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
        ) : null}
      </div>
    </div>
  );
}
