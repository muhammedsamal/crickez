import React from "react";

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
  const style =
    "border border-white px-4 py-2 rounded-full text-white font-bold";

  return (
    <div className="flex w-full flex-col h-screen p-4 items-center justify-center -mt-20">
      <p className="text-xl">Play</p>
      <p className="text-xl font-bold mb-4">
        {userBatting ? "You are batting" : "You are bowling"}
      </p>
      <div className="flex gap-4">
        {arr.map((item, index) => (
          <button
            className={style}
            value={item}
            key={item}
            onClick={handlePlay}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col absolute bottom-0 left-0 w-full pb-4 px-4 text-lg">
        <table className="table-auto">
          <tbody>
            <tr className="border-b-2">
              <td>Computer Score:</td>
              <td>{computerScore}</td>
            </tr>
            <tr className="border-b-2">
              <td>Your Score:</td>
              <td>{userScore}</td>
            </tr>
            <tr className="border-b-2">
              <td>Balls:</td>
              <td>{balls}</td>
            </tr>
            <tr className="border-b-2">
              <td>First Inning:</td>
              <td>{firstInning ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Game Over:</td>
              <td>{gameOver ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
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
