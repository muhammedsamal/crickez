import Image from "next/image";

interface ChooseProps {
  readonly setUserBatting: (value: boolean) => void;
  readonly setChoosed: (value: boolean) => void;
  readonly setPlay: (value: boolean) => void;
}

export default function Choose({
  setUserBatting,
  setChoosed,
  setPlay,
}: ChooseProps) {
  const style = "bg-green-400 py-4 text-xl rounded-md w-full shadow-md mb-4";

  return (
    <div className="flex flex-col items-center h-screen w-full px-8 py-8">
      <h1 className="text-3xl mb-20 mt-10">You won the Toss!!!</h1>
      <div className="w-full h-[25vh] relative mb-20">
        <Image src="/toss.svg" layout="fill" objectFit="contain" alt="toss" />
      </div>
      <button
        className={style}
        value="Batting"
        onClick={() => {
          setUserBatting(true);
          setChoosed(true);
          setPlay(true);
        }}
      >
        Bating
      </button>
      <button
        className={style}
        value="Bowling"
        onClick={() => {
          setUserBatting(false);
          setChoosed(true);
          setPlay(true);
        }}
      >
        Bowling
      </button>
    </div>
  );
}
