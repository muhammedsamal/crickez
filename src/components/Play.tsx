interface PlayProps {
  readonly userBatting: boolean;
  readonly handlePlay: (event: any) => void;
  readonly computerScore: number;
  readonly userScore: number;
  readonly balls: number;
  readonly firstInning: boolean;
  readonly gameOver: boolean;
}

export default function Play({
  userBatting,
  handlePlay,
  computerScore,
  userScore,
  balls,
  firstInning,
  gameOver,
}: PlayProps) {
  return (
    <div>
      <p>Play</p>
      <p>{userBatting ? "You are batting" : "You are bowling"}</p>
      <div className="flex gap-4">
        {["1", "2", "3", "4", "5", "6"].map((item, index) => (
          <button
            className="text-black flex gap-4 bg-slate-400 rounded-full px-4 py-2 items-center justify-center"
            value={item}
            key={index}
            onClick={handlePlay}
          >
            {item}
          </button>
        ))}
      </div>
      <p>Computer Score: {computerScore}</p>
      <p>Your Score: {userScore}</p>
      <p>Balls: {balls}</p>
      <p>First Inning: {firstInning ? "Yes" : "No"}</p>
      <p>Game Over: {gameOver ? "Yes" : "No"}</p>
    </div>
  );
}
