"use client";
import WelcomeBox from "@/app/components/partial/welcome-box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import PlayRoom from "@/app/components/multiple/play-room";
import StandbyRoom from "@/app/components/multiple/standby-room";
import AnswerSubmitModal from "@/app/components/partial/answer-submit-modal";
import PlayerScoreBox from "@/app/components/partial/player-score-box";

export default function Page() {
  const router = useRouter();
  const roomId = localStorage.getItem("roomId");
  const roundNo = Number(localStorage.getItem("rounds"));
  const username = localStorage.getItem("username");

  const [turn, setTurn] = useState(true);
  const [timer, setTimer] = useState(20);
  const [halfRound, setHalfRound] = useState(1);
  const [roundCount, setRoundCount] = useState(roundNo);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");

  const [numberOfPlayerOnline, setNumberOfPlayerOnline] = useState<any[]>(
    []
  ) as any[];

  const [equation, setEquation] = useState<number[]>();
  const [answer, setAnswer] = useState<number>();

  const [problem, setProblem] = useState<{ data: number[] | null }>({
    data: null,
  });
  const [solution, setSolution] = useState<number[]>([]);

  const [playerScore, setPlayerScore] = useState({
    playerOne: 0,
    playerTwo: 0,
  });
  const [roundScore, setRoundScore] = useState({
    playerOne: { timer: 100, answer: 0 },
    playerTwo: { timer: 100, answer: 0 },
  });

  const socket = new WebSocket(`ws://127.0.0.1:8000/ws/game/${roomId}/`);

  useEffect(() => {
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "online_status",
        })
      );

      socket.send(
        JSON.stringify({
          type: "game_problem",
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "player_status") {
        if (data.players.length > 2) {
          const temporalArray = data.players;
          setNumberOfPlayerOnline(temporalArray.slice(0, 2));
        } else {
          setNumberOfPlayerOnline(data.players);
        }
      }

      // state snapshot
      if (data.type == "game_problem") {
        setTimeout(() => {
          const temporalProb = data.all_problem.map((i) => i.problem);
          const temporalSol = data.all_problem.map((i) => eval(i.solution));
          setProblem({ data: temporalProb });
          setSolution(temporalSol);
          setEquation(temporalProb[roundNo - 1]);
          setAnswer(temporalSol[roundNo - 1]);

          // console.log(
          //   "socket",
          //   data.all_problem.map((i) => i.problem)
          // );
          // console.log(
          //   "socket",
          //   data.all_problem.map((i) => eval(i.solution))
          // );
          console.log(
            "socket",
            data.all_problem.map((i) => i.solution)
          );
        }, 100);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      //possible bug
      setTimer((timer) => timer - 1);
    }, 1000);

    if (timer === 0) {
      setShowModal(false);
      if (halfRound == 2) {
        setRoundCount((round) => round - 1);
        setHalfRound(1);
        if (
          roundScore.playerOne.answer == answer &&
          roundScore.playerTwo.answer != answer
        ) {
          setPlayerScore({ playerOne: 1, playerTwo: 0 });
        } else if (
          roundScore.playerOne.answer != answer &&
          roundScore.playerTwo.answer == answer
        ) {
          setPlayerScore({ playerOne: 0, playerTwo: 1 });
        } else if (
          roundScore.playerOne.answer == answer &&
          roundScore.playerTwo.answer == answer &&
          roundScore.playerOne.timer < roundScore.playerTwo.timer
        ) {
          setPlayerScore({ playerOne: 1, playerTwo: 0 });
        } else if (
          roundScore.playerOne.answer == answer &&
          roundScore.playerTwo.answer == answer &&
          roundScore.playerOne.timer > roundScore.playerTwo.timer
        ) {
          setPlayerScore({ playerOne: 0, playerTwo: 1 });
        }

        setEquation(problem.data[roundCount - 2]);
        setAnswer(solution[roundCount - 2]);
        setRoundScore({
          playerOne: { timer: 100, answer: 0 },
          playerTwo: { timer: 100, answer: 0 },
        });
        console.log("equa", equation);
        console.log("ans", answer);
        console.log("player score", playerScore);
      } else {
        setHalfRound((halfRound) => halfRound + 1);
      }
      // possible bug
      setTimer(20);
      setTurn(!turn);

      // console.log("problem", problem);
      // console.log(problem.data[0]);
      // console.log("solution", solution);
    }

    if (roundCount === 0) {
      socket.close();
      router.push(`/`);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleSubmitClick = (solution: number, userResult: number) => {
    // check player ready status
    if (userResult == solution) {
      setIsCorrect("CORRECT !!!");
      setShowModal(true);
      if (username == numberOfPlayerOnline[0]) {
        setRoundScore({
          playerOne: { timer: 60 - timer, answer: userResult },
          playerTwo: { timer: 100, answer: 0 },
        });
        console.log("1", roundScore);
      } else if (username == numberOfPlayerOnline[1]) {
        setRoundScore({
          playerOne: { timer: 100, answer: 0 },
          playerTwo: { timer: 60 - timer, answer: userResult },
        });
        console.log("2", roundScore);
      }
    } else {
      setShowModal(true);
      setIsCorrect("WRONG !!!");
    }
  };

  // socket.send(
  //       JSON.stringify({
  //         type: "game_answer",
  //         curr_round: roundCount,
  //         problem: solution,
  //         player_answer: {
  //           player1: {
  //             username: numberOfPlayerOnline[0],
  //             answer: userResult,
  //             time: 60 - timer,
  //           },
  //           player2: {
  //             username: numberOfPlayerOnline[1],
  //             answer: userResult,
  //             time: 61 - timer,
  //           },
  //         },
  //       })
  //     );

  // socket.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   if (data.type == "game_answer") {
  //     if (data.winner == numberOfPlayerOnline[0]) {
  //       setPlayerScore({ playerOne: 1, playerTwo: 0 });
  //     } else if (data.winner == numberOfPlayerOnline[1]) {
  //       setPlayerScore({ playerOne: 0, playerTwo: 1 });
  //     }
  //   }
  // };

  return (
    <>
      {username == numberOfPlayerOnline[0] &&
        turn &&
        problem.data !== null &&
        equation &&
        answer && (
          <>
            {showModal && (
              <AnswerSubmitModal
                text={isCorrect}
                onClose={() => setShowModal(false)} // Pass a function to close the modal
              />
            )}
            <div className="flex flex-row justify-center items-center">
              <PlayRoom
                timer={timer}
                prob={equation}
                sol={answer}
                submit={handleSubmitClick}
              />
              <PlayerScoreBox
                playerName1={numberOfPlayerOnline[0]}
                score1={playerScore.playerOne}
                playerName2={numberOfPlayerOnline[1]}
                score2={playerScore.playerTwo}
              />
            </div>
          </>
        )}
      {username == numberOfPlayerOnline[0] && !turn && (
        <StandbyRoom username={numberOfPlayerOnline[1]} timer={timer} />
      )}

      {username == numberOfPlayerOnline[1] &&
        !turn &&
        problem.data !== null &&
        equation &&
        answer && (
          <>
            {showModal && (
              <AnswerSubmitModal
                text={isCorrect}
                onClose={() => setShowModal(false)} // Pass a function to close the modal
              />
            )}
            <div className="flex flex-row justify-center items-center">
              <PlayRoom
                timer={timer}
                prob={equation}
                sol={answer}
                submit={handleSubmitClick}
              />
              <PlayerScoreBox
                playerName1={numberOfPlayerOnline[0]}
                score1={playerScore.playerOne}
                playerName2={numberOfPlayerOnline[1]}
                score2={playerScore.playerTwo}
              />
            </div>
          </>
        )}
      {username == numberOfPlayerOnline[1] && turn && (
        <StandbyRoom username={numberOfPlayerOnline[0]} timer={timer} />
      )}
      {/* <div>loading</div> */}
    </>
  );
}
