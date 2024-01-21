interface GameOverProps {
  readonly message: string;
  readonly restart: () => void;
}

export default function GameOver({ message, restart }: GameOverProps) {
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={restart}>Play Again</button>
    </div>
  );
}
