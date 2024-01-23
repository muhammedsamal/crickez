"use client";

import Choose from "@/components/Choose";
import GameOver from "@/components/GameOver";
import Play from "@/components/Play";
import Toss from "@/components/Toss";
import { useState } from "react";
import {
  generateToss,
  generateComputerChoice,
  generateComputerScore,
  shuffleArray,
} from "@/utils";

export default function Page() {
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
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);

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

  function handleSubmit(event: any) {
    setTossed(true);
    const computerToss = generateToss();
    if (event.target.value === computerToss) {
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

  function handleUserBatting(userShot: number, computerShot: number) {
    if (userShot === computerShot) {
      // if the user is out
      if (firstInning) {
        setFirstInning(false);
        setUserBatting(false);
        setBalls(0);
        setMessage("First inning is over");
      } else {
        // if the user is out in the second inning
        setGameOver(true);
        setMessage("You are out. Computer won the match");
      }
    } else {
      if (userScore + userShot > computerScore && !firstInning) {
        // if the user score is greater than the computer score
        setGameOver(true);
        setMessage("You won the match");
      }
      setUserScore((score) => score + userShot);
      if (balls + 1 === 6) {
        // if the balls are 6
        setFirstInning(false);
        setUserBatting(false);
        setBalls(0);
        setMessage("First inning is over");
      } else {
        setBalls((balls) => balls + 1);
      }
    }
  }

  function handleUserBowling(userShot: number, computerShot: number) {
    if (userShot === computerShot) {
      // if the computer is out
      if (firstInning) {
        setFirstInning(false);
        setUserBatting(true);
        setBalls(0);
        setMessage("First inning is over");
      } else {
        // if the computer is out in the second inning
        setGameOver(true);
        setMessage("Computer is out. You won the match");
      }
    } else {
      if (computerScore + computerShot > userScore && !firstInning) {
        // if the computer score is greater than the user score
        setGameOver(true);
        setMessage("Computer won the match");
      }
      setComputerScore(computerScore + computerShot);
      if (balls + 1 === 6) {
        // if the balls are 6
        setFirstInning(false);
        setUserBatting(true);
        setBalls(0);
        setMessage("First inning is over");
      } else {
        setBalls((balls) => balls + 1);
      }
    }
  }

  function handlePlay(event: any) {
    const userShot = parseInt(event.target.value);
    if (userBatting) {
      const computerShot = generateComputerScore();
      handleUserBatting(userShot, computerShot);
    } else {
      const computerShot = generateComputerScore();
      handleUserBowling(userShot, computerShot);
    }
    setArr(shuffleArray());
  }

  if (gameOver) {
    return <GameOver message={message} restart={restart} />;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-green-300">
      <div className="w-full h-screen bg-green-300">
        {!tossed && <Toss handleSubmit={handleSubmit} />}
        {tossed && !choosed && toss == "You won the toss" && (
          <Choose
            setUserBatting={setUserBatting}
            setChoosed={setChoosed}
            setPlay={setPlay}
          />
        )}
        {choosed && toss == "You lost the toss" && (
          <p className="text-lg">
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
            message={message}
            arr={arr}
          />
        )}
      </div>
    </div>
  );
}
