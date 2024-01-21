"use client";

import Choose from "@/components/Choose";
import GameOver from "@/components/GameOver";
import Play from "@/components/Play";
import Toss from "@/components/Toss";
import { useState } from "react";

export default function Home() {
  const [tossed, setTossed] = useState(false); // to check if the toss is done
  const [choosed, setChoosed] = useState(false); // to check if the user has choosed batting or bowling
  const [userBatting, setUserBatting] = useState(false); // to check if the user is batting
  const [toss, setToss] = useState(""); // to store the toss result
  const [play, setPlay] = useState(false); // to check if the game is started
  const [userScore, setUserScore] = useState(0); // to store the user score
  const [computerScore, setComputerScore] = useState(0); // to store the computer score
  const [firstInning, setFirstInning] = useState(true); // to check if the first inning is done
  const [balls, setBalls] = useState(0); // to store the balls
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  function restart() {
    setTossed(false);
    setChoosed(false);
    setUserBatting(false);
    setToss("");
    setPlay(false);
    setUserScore(0);
    setComputerScore(0);
    setFirstInning(true);
    setBalls(0);
    setGameOver(false);
    setMessage("");
  }

  function generateToss() {
    const random = Math.random();
    if (random < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }

  function generateComputerChoice() {
    const random = Math.random();
    if (random < 0.5) {
      return "Batting";
    } else {
      return "Bowling";
    }
  }

  function handleSubmit(event: any) {
    setTossed(true);
    console.log(event.target.value);
    if (event.target.value === generateToss()) {
      setToss("You won the toss");
    } else {
      setToss("You lost the toss");
      const computerChoice = generateComputerChoice();
      if (computerChoice == "Batting") {
        setUserBatting(false);
      } else {
        setUserBatting(true);
      }
      setChoosed(true);
      setPlay(true);
    }
  }

  function generateComputerScore() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function handleUserBatting(userShot: number, computerShot: number) {
    if (userShot === computerShot) {
      if (firstInning) {
        setFirstInning(false);
        setUserBatting(false);
      } else {
        setGameOver(true);
        setMessage("You are out. Computer won the match");
      }
    } else {
      setUserScore(userScore + userShot);
    }
  }

  function handleUserBowling(userShot: number, computerShot: number) {
    if (userShot === computerShot) {
      if (firstInning) {
        setFirstInning(false);
        setUserBatting(true);
      } else {
        setGameOver(true);
        setMessage("Computer is out. You won the match");
      }
    } else {
      setComputerScore(computerScore + computerShot);
    }
  }

  function handlePlay(event: any) {
    if (balls === 6) {
      if (firstInning) {
        setFirstInning(false);
        setUserBatting(!userBatting);
        setBalls(0);
      } else {
        setGameOver(true);
        if (userScore > computerScore) {
          setMessage("You won the match");
        } else if (computerScore > userScore) {
          setMessage("Computer won the match");
        } else {
          setMessage("Match draw");
        }
      }
    }
    const userShot = parseInt(event.target.value);
    const computerShot = generateComputerScore();
    setBalls(balls + 1);

    if (userBatting) {
      handleUserBatting(userShot, computerShot);
    } else {
      handleUserBowling(userShot, computerShot);
    }
  }
  if (gameOver) {
    return <GameOver message={message} restart={restart} />;
  }

  return (
    <div className="flex items-center justify-center">
      <div>
        {!tossed && <Toss handleSubmit={handleSubmit} />}
        {tossed && !choosed && toss == "You won the toss" && (
          <Choose
            setUserBatting={setUserBatting}
            setChoosed={setChoosed}
            setPlay={setPlay}
          />
        )}
        {choosed && toss == "You lost the toss" && (
          <p>
            {userBatting
              ? "Computer won the toss and choose bowling"
              : "Computer won the toss and choose batting"}
          </p>
        )}
        {play && (
          <Play
            userBatting={userBatting}
            handlePlay={handlePlay}
            computerScore={computerScore}
            userScore={userScore}
            balls={balls}
            firstInning={firstInning}
            gameOver={gameOver}
          />
        )}
      </div>
    </div>
  );
}
