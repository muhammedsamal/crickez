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
    "cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md";
  return (
    <div className="h-screen flex flex-col justify-center gap-4">
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
