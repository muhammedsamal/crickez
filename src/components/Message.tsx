import { useState, useEffect } from "react";

interface MessageProps {
  readonly message: string;
}

export default function Message({ message }: MessageProps) {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000); // Fade out after 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-10 bg-green-100 flex flex-col items-center justify-center ${
        showMessage ? "" : "fade-out"
      }`}
    >
      <h1 className="text-xl">{message}</h1>
      <style jsx>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .fade-out {
          animation: fadeOut 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
