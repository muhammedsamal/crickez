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
  return (
    <div>
      <input
        className="cursor-pointer mr-2"
        type="button"
        value="Batting"
        onClick={() => {
          setUserBatting(true);
          setChoosed(true);
          setPlay(true);
        }}
      />
      <input
        className="cursor-pointer mr-2"
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
