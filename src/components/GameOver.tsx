import Image from "next/image";

interface GameOverProps {
  readonly message: string;
  readonly restart: () => void;
}

export default function GameOver({ message, restart }: GameOverProps) {
  const style = "bg-green-400 py-4 text-xl rounded-md px-6 shadow-md mb-4";
  return (
    <div className="flex h-screen flex-col items-center justify-center font-bold w-full gap-4 bg-green-100">
      <div className="w-full h-[50vh] relative">
        <Image src="/award.svg" layout="fill" objectFit="contain" alt="hero" />
      </div>
      <h1 className="text-3xl">{message}</h1>
      <button className={style} onClick={restart}>
        Play Again
      </button>
    </div>
  );
}
