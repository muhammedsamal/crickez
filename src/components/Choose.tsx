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
  const style =
    "cursor-pointer bg-green-400 hover:bg-green-600 font-bold py-2 px-4 rounded-md w-full";

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-4 px-8">
      <h1 className="text-3xl mb-20">You won the Toss!!!</h1>
      <div className="w-full h-[25vh] relative mb-20">
        <Image src="/toss.svg" layout="fill" objectFit="contain" alt="toss" />
      </div>
      <input
        className={style}
        type="button"
        value="Batting"
        onClick={() => {
          setUserBatting(true);
          setChoosed(true);
          setPlay(true);
        }}
      />
      <input
        className={style}
        type="button"
        value="Bowling"
        onClick={() => {
          setUserBatting(false);
          setChoosed(true);
          setPlay(true);
        }}
      />
    </div>
  );
}
