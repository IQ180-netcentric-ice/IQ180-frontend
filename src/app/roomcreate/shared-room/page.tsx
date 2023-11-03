"use client";
import Image from "next/image";
import SharedRoom from "../../components/partial/sharedroom-ready-card";
import LabelCard from "../../components/partial/sharedroom-rounds";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const roomId = localStorage.getItem("roomId");
  const roundNo = Number(localStorage.getItem("rounds"));
  const timeEachRound = Number(localStorage.getItem("minutes"));
  const userName = localStorage.getItem("username");

  const [numberOfPlayerOnline, setNumberOfPlayerOnline] = useState<any[]>(
    []
  ) as any[];
  const zero = 0;
  const one = 1;

  const [playerOneReady, setplayerOneReady] = useState(false);
  const [playerTwoReady, setplayerTwoReady] = useState(false);

  const socket = new WebSocket(`ws://127.0.0.1:8000/ws/game/testing/`);

  useEffect(() => {
    socket.onopen = () => {
      console.log("im open");
      socket.send(
        JSON.stringify({
          type: "create_room",
          username: userName,
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (typeof data.number_users === "number") {
        // console.log("data", data);
        if (data.users.length > 2) {
          const temporalArray = data.users;
          // console.log("temporal array", temporalArray);
          setNumberOfPlayerOnline(temporalArray.slice(0, 2));
        } else {
          setNumberOfPlayerOnline(data.users);
        }
      }
    };
  }, []);

  const handleReadyClick = (no: number) => {
    // check player ready status
    if (no == 0) {
      socket.send(
        JSON.stringify({
          type: "ready_status",
          room_id: roomId,
          player_status: {
            p1: true,
            p2: false,
          },
        })
      );
    } else if (no == 1) {
      socket.send(
        JSON.stringify({
          type: "ready_status",
          room_id: roomId,
          player_status: {
            p1: false,
            p2: true,
          },
        })
      );
    }
    console.log(numberOfPlayerOnline);
  };

  const handleQuitClick = () => {
    socket.send(
      JSON.stringify({
        type: "quit",
        username: userName,
      })
    );
    router.push(`/`);
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.player_status.p1 === true && data.player_status.p2 === false) {
      setplayerOneReady(data.player_status.p1);
    } else if (
      data.player_status.p1 === false &&
      data.player_status.p2 === true
    ) {
      setplayerTwoReady(data.player_status.p2);
    }
  };

  if (playerOneReady && playerTwoReady) {
    router.push("/roomcreate/shared-room/welcome");
  }

  return (
    <>
      <Image
        fill={true}
        src="/background_iq180.svg"
        alt="background image"
        className="z-[-1]"
      />
      <div className="flex flex-row items-center justify-start z-[1] h-[100vh]">
        <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-around items-center bg-[#DCDCDC] w-[400px] h-[500px]">
          <div className="m-[25px] items-center flex flex-col justify-between">
            <label className="m-[5px] p-2 border-solid border-black-[1px] rounded-lg  bg-[#999999]">
              Room ID: {roomId}
            </label>
          </div>

          <div className="flex flex-col">
            <LabelCard label="# of Rounds" no={roundNo} />
            <LabelCard label="Time per round" no={timeEachRound} />
          </div>
          <button
            className="flex bg-red-500 p-[5px] border-solid border-black border-[1px] rounded-lg w-[150px] justify-center text-3xl hover:transform hover:-translate-y-1 hover:shadow-md"
            onClick={handleQuitClick}
          >
            QUIT
          </button>
        </div>
        <div className="m-[25px] border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[1000px] h-[500px]">
          <div className="flex flex-row justify-center">
            {numberOfPlayerOnline && numberOfPlayerOnline.length > 0 ? (
              <SharedRoom
                src="/batman.svg"
                username={numberOfPlayerOnline[0]}
                onClick={handleReadyClick}
                no={zero}
                condition={playerOneReady}
              />
            ) : (
              <Image
                src="/loading.svg"
                alt="loading"
                width={250}
                height={250}
              />
            )}
            <Image
              src="/vs.svg"
              width={200}
              height={20}
              alt="background image"
              className="border-solid border-gray-500 m-[25px] "
            />
            {numberOfPlayerOnline && numberOfPlayerOnline.length >= 2 ? (
              <SharedRoom
                src="/joker.svg"
                username={numberOfPlayerOnline[1]}
                onClick={handleReadyClick}
                no={one}
                condition={playerTwoReady}
              />
            ) : (
              <Image
                src="/loading.svg"
                alt="loading"
                width={250}
                height={250}
              />
            )}
            {/* {numberOfPlayerOnline && numberOfPlayerOnline.length === 2 ? (
              <>
                {numberOfPlayerOnline.map((i) => (
                  <SharedRoom
                    key={i.username} // Make sure to include a unique key for each item in the map
                    src="/joker.svg"
                    username={i.username}
                    ready={setPlayerReady}
                    onClick={handleReadyClick}
                    onlinePlayer={i.username ?? "joker"}
                  />
                ))}
              </>
            ) : (
              <Image
                src="/loading.svg"
                alt="loading"
                width={250}
                height={250}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
