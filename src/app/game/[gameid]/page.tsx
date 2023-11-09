"use client";

import PlayRoom from "@/app/components/multiple/play-room";
import StandbyRoom from "@/app/components/multiple/standby-room";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

type GameData = {
  player1: {
    username: string;
    answer: number;
    time: number;
  };
  player2: {
    username: string;
    answer: number;
    time: number;
  };
};

export default function Page() {
  const router = useRouter();
  const roomId = localStorage.getItem("roomId");
  const roundNo = Number(localStorage.getItem("rounds"));
  const username = localStorage.getItem("username");

  const [turn, setTurn] = useState(true);
  const [timer, setTimer] = useState(30);
  const [halfRound, setHalfRound] = useState(1);
  const [roundCount, setRoundCount] = useState(roundNo);

  const [numberOfPlayerOnline, setNumberOfPlayerOnline] = useState<any[]>(
    []
  ) as any[];
  const [scoreSocket, setScoreSocket] = useState<GameData>({
    player1: {
      username: "",
      answer: 0,
      time: 100,
    },
    player2: {
      username: "",
      answer: 0,
      time: 100,
    },
  });

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
  // const [roundScore, setRoundScore] = useState({
  //   playerOne: { timer: 100, answer: 0 },
  //   playerTwo: { timer: 100, answer: 0 },
  // });

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
      if (halfRound == 2) {
        setRoundCount((round) => round - 1);
        setHalfRound(1);

        // if (
        //   scoreSocket.player1.time !== 100 &&
        //   scoreSocket.player2.time !== 100
        // ) {
        //   evaluateWinner();
        // }

        // if (
        //   roundScore.playerOne.answer == answer &&
        //   roundScore.playerTwo.answer != answer
        // ) {
        //   setPlayerScore({
        //     playerOne: playerScore.playerOne + 1,
        //     playerTwo: playerScore.playerTwo,
        //   });
        // } else if (
        //   roundScore.playerOne.answer != answer &&
        //   roundScore.playerTwo.answer == answer
        // ) {
        //   setPlayerScore({
        //     playerOne: playerScore.playerOne,
        //     playerTwo: playerScore.playerTwo + 1,
        //   });
        // } else if (
        //   roundScore.playerOne.answer == answer &&
        //   roundScore.playerTwo.answer == answer &&
        //   roundScore.playerOne.timer < roundScore.playerTwo.timer
        // ) {
        //   setPlayerScore({
        //     playerOne: playerScore.playerOne + 1,
        //     playerTwo: playerScore.playerTwo,
        //   });
        // } else if (
        //   roundScore.playerOne.answer == answer &&
        //   roundScore.playerTwo.answer == answer &&
        //   roundScore.playerOne.timer > roundScore.playerTwo.timer
        // ) {
        //   setPlayerScore({
        //     playerOne: playerScore.playerOne,
        //     playerTwo: playerScore.playerTwo + 1,
        //   });
        // }

        setEquation(problem.data[roundCount - 2]);
        setAnswer(solution[roundCount - 2]);
        // setRoundScore({
        //   playerOne: { timer: 100, answer: 0 },
        //   playerTwo: { timer: 100, answer: 0 },
        // });
        console.log("equa", equation);
        console.log("ans", answer);
        console.log("player score", playerScore);
      } else {
        setHalfRound((halfRound) => halfRound + 1);
      }
      // possible bug
      setTimer(30);
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
      if (username == numberOfPlayerOnline[0]) {
        // setRoundScore({
        //   playerOne: { timer: 60 - timer, answer: userResult },
        //   playerTwo: { timer: 100, answer: 0 },
        // });
        // console.log("1", roundScore);

        socket.send(
          JSON.stringify({
            type: "game_answer",
            curr_round: roundCount,
            problem: solution,
            player_answer: {
              player1: {
                username: numberOfPlayerOnline[0],
                answer: userResult,
                time: 60 - timer,
              },
              player2: {
                username: numberOfPlayerOnline[1],
                answer: "",
                time: 100,
              },
            },
          })
        );
      } else if (username == numberOfPlayerOnline[1]) {
        // setRoundScore({
        //   playerOne: { timer: 100, answer: 0 },
        //   playerTwo: { timer: 60 - timer, answer: userResult },
        // });
        // console.log("2", roundScore);

        socket.send(
          JSON.stringify({
            type: "game_answer",
            curr_round: roundCount,
            problem: solution,
            player_answer: {
              player1: {
                username: numberOfPlayerOnline[0],
                answer: "",
                time: 100,
              },
              player2: {
                username: numberOfPlayerOnline[1],
                answer: userResult,
                time: 60 - timer,
              },
            },
          })
        );
      }
    }
  };

  const evaluateWinner = () => {
    // console.log("curr_round", roundCount);
    // console.log("problem", answer);
    // console.log("player1 ans", scoreSocket.player1.answer);
    // console.log("player1 time", scoreSocket.player1.time);
    // console.log("player2 ans", scoreSocket.player2.answer);
    // console.log("player2 time", scoreSocket.player2.time);
    // socket.send(
    //   JSON.stringify({
    //     type: "game_answer",
    //     curr_round: roundCount,
    //     problem: answer,
    //     player_answer: {
    //       player1: {
    //         username: numberOfPlayerOnline[0],
    //         answer: scoreSocket.player1.answer,
    //         time: scoreSocket.player1.time,
    //       },
    //       player2: {
    //         username: numberOfPlayerOnline[1],
    //         answer: scoreSocket.player2.answer,
    //         time: scoreSocket.player2.time,
    //       },
    //     },
    //   })
    // );

    socket.send(
      JSON.stringify({
        type: "game_answer",
        curr_round: roundCount,
        problem: 60,
        player_answer: {
          player1: {
            username: numberOfPlayerOnline[0],
            answer: 60,
            time: 60,
          },
          player2: {
            username: numberOfPlayerOnline[1],
            answer: 50,
            time: 60,
          },
        },
      })
    );
    console.log(
      JSON.stringify({
        type: "game_answer",
        curr_round: roundCount,
        problem: answer,
        player_answer: {
          player1: {
            username: numberOfPlayerOnline[0],
            answer: scoreSocket.player1.answer,
            time: scoreSocket.player1.time,
          },
          player2: {
            username: numberOfPlayerOnline[1],
            answer: scoreSocket.player2.answer,
            time: scoreSocket.player2.time,
          },
        },
      })
    );
    console.log("send evaluate winner");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type == "winner_answer") {
      console.log("data_winer");
      if (data.winner == numberOfPlayerOnline[0]) {
        setPlayerScore({
          playerOne: playerScore.playerOne + 1,
          playerTwo: playerScore.playerTwo,
        });
        console.log("player1 +1");
      } else if (data.winner == numberOfPlayerOnline[1]) {
        setPlayerScore({
          playerOne: playerScore.playerOne,
          playerTwo: playerScore.playerTwo + 1,
        });
        console.log("player2 +1");
      }
    }

    if (data.type == "game_answer") {
      // console.log(data.player_answer);
      // console.log(data.player_answer.player2.answer);
      if (data.player_answer.player1.answer == "") {
        setScoreSocket({
          player1: {
            username: numberOfPlayerOnline[0],
            answer: scoreSocket.player1.answer,
            time: scoreSocket.player1.time,
          },
          player2: {
            username: numberOfPlayerOnline[1],
            answer: data.player_answer.player2.answer,
            time: data.player_answer.player2.time,
          },
        });
        console.log("receive 2");
      } else if (data.player_answer.player2.answer == "") {
        setScoreSocket({
          player1: {
            username: numberOfPlayerOnline[0],
            answer: data.player_answer.player1.answer,
            time: data.player_answer.player1.time,
          },
          player2: {
            username: numberOfPlayerOnline[1],
            answer: scoreSocket.player2.answer,
            time: scoreSocket.player2.time,
          },
        });
        console.log("receive 1");
      }
    }
  };

  return (
    <>
      {username == numberOfPlayerOnline[0] &&
        turn &&
        problem.data !== null &&
        equation &&
        answer && (
          <PlayRoom
            timer={timer}
            prob={equation}
            sol={answer}
            submit={handleSubmitClick}
            check={evaluateWinner}
          />
        )}
      {username == numberOfPlayerOnline[0] && !turn && (
        <StandbyRoom username={numberOfPlayerOnline[1]} timer={timer} />
      )}

      {username == numberOfPlayerOnline[1] &&
        !turn &&
        problem.data !== null &&
        equation &&
        answer && (
          <PlayRoom
            timer={timer}
            prob={equation}
            sol={answer}
            submit={handleSubmitClick}
            check={evaluateWinner}
          />
        )}
      {username == numberOfPlayerOnline[1] && turn && (
        <StandbyRoom username={numberOfPlayerOnline[0]} timer={timer} />
      )}
      {/* <div>loading</div> */}
    </>
  );
}
