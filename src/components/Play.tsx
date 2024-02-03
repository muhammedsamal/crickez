import Image from "next/image";
import { useState, useEffect } from "react";
import Message from "./Message";

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
  const [showMessage, setShowMessage] = useState(false);

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

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer); // Clear the timer if the component is unmounted
    }
  }, [message]);

  const style =
    "px-4 py-2 rounded-full text-white font-bold bg-green-500 text-black shadow-md";

  const td = "bg-green-400 text-black text-sm px-2 py-1 rounded-md w-1/2 mr-2";
  const th =
    "bg-green-200 text-black text-sm px-2 py-1 rounded-md w-1/2 text-right ml-2";

  return (
    <div className="flex w-full flex-col h-screen p-4 items-center justify-center">
      {showMessage && <Message message={message} />}
      <div className="w-full h-[20vh] -mt-14 relative mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
