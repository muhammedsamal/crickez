import Image from "next/image";
import { useState, useEffect } from "react";

interface PlayProps {
  readonly userBatting: boolean;
  readonly handlePlay: (event: any) => void;
  readonly computerScore: number;
  readonly userScore: number;
  readonly balls: number;
  readonly firstInning: boolean;
  readonly gameOver: boolean;
  readonly message: string;
  readonly arr: number[];
}

export default function Play({
  userBatting,
  handlePlay,
  computerScore,
  userScore,
  balls,
  firstInning,
  gameOver,
  message,
  arr,
}: PlayProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    if (userBatting) {
      setImg("/batting.svg");
    } else {
      setImg("/bowling.svg");
    }
    if (gameOver) {
      setImg("/award.svg");
    }
  }, [userBatting, gameOver]);
  const style =
    "px-4 py-2 rounded-full text-white font-bold bg-green-500 text-black shadow-md";

  const td = "bg-green-400 text-black text-sm px-2 py-1 rounded-md w-1/2 mr-2";
  const th =
    "bg-green-200 text-black text-sm px-2 py-1 rounded-md w-1/2 text-right ml-2";

  return (
    <div className="flex w-full flex-col h-screen p-4 items-center justify-center">
      {/* <p className="text-2xl">Play</p> */}
      <div className="w-full h-[20vh] -mt-14 relative  mb-4">
        <Image src={img} layout="fill" objectFit="contain" alt="hero" />
      </div>
      <p className="text-3xl mb-4">
        {userBatting ? "You are batting" : "You are bowling"}
      </p>
      <div className="flex gap-4">
        {arr.map((item, index) => (
          <button
            className={`${style} ${isClicked ? "animate-spin" : ""}`}
            value={item}
            key={item}
            onClick={() => {
              handlePlay({ target: { value: item } });
              setIsClicked(true);
              setTimeout(() => setIsClicked(false), 1000); // Reset after 1s
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between w-full mt-4">
        <div className="bg-white w-full p-2 rounded-lg shadow-md">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between">
              <div className={td}>Computer Score:</div>
              <div className={th}>{computerScore}</div>
            </div>
            <div className="flex justify-between">
              <div className={td}>Your Score:</div>
              <div className={th}>{userScore}</div>
            </div>
            <div className="flex justify-between ">
              <div className={td}>Balls:</div>
              <div className={th}>{balls}</div>
            </div>
            <div className="flex justify-between ">
              <div className={td}>First Inning:</div>
              <div className={th}>{firstInning ? "Yes" : "No"}</div>
            </div>
            <div className="flex justify-between ">
              <div className={td}>Game Over:</div>
              <div className={th}>{gameOver ? "Yes" : "No"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// <p>Computer Score: {computerScore}</p>
// <p>Your Score: {userScore}</p>
// <p>Balls: {balls}</p>
// <p>First Inning: {firstInning ? "Yes" : "No"}</p>
// <p>Game Over: {gameOver ? "Yes" : "No"}</p>
// <p>Message: {message}</p>
//       </div>
//     </div>
//   );
// }
