interface GameOverProps {
  readonly message: string;
  readonly restart: () => void;
}

export default function GameOver({ message, restart }: GameOverProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-bold">
      <h1>{message}</h1>
      <button
        className="border border-white px-4 py-2 rounded-md mt-4 text-white"
        onClick={restart}
      >
        Play Again
      </button>
    </div>
  );
}
