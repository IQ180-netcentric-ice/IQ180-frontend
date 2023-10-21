"use client";
import Image from "next/image";
import SharedRoom from "../../components/partial/sharedroom-ready-card";
import LabelCard from "../../components/partial/sharedroom-rounds";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { UserNameContext } from "../../page";

export default function Page() {
  // const userName = useContext(UserNameContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const roomId = searchParams.get("roomNo");
  const roundNo = Number(searchParams.get("rounds"));
  const timeEachRound = Number(searchParams.get("minutes"));

  const [playerReady, setPlayerReady] = useState(0);

  useEffect(() => {
    if (playerReady == 2) {
      router.push("/roomcreate/shared-room/welcome");
    }
  }, [playerReady]);

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
            {/* <label className="m-[5px] p-2 border-solid border-black-[1px] rounded-lg  bg-[#999999]">
              Room's Name:
            </label> */}
            <label className="m-[5px] p-2 border-solid border-black-[1px] rounded-lg  bg-[#999999]">
              Room ID: {roomId}
            </label>
          </div>

          <div className="flex flex-col">
            <LabelCard label="# of Rounds" no={roundNo} />
            <LabelCard label="Time per round" no={timeEachRound} />
          </div>
        </div>
        <div className="m-[25px] border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[1000px] h-[500px]">
          <div className="flex flex-row justify-center">
            <SharedRoom
              src="/batman.svg"
              username="Batman"
              ready={setPlayerReady}
            />
            <Image
              src="/vs.svg"
              width={200}
              height={20}
              alt="background image"
              className="border-solid border-gray-500 m-[25px] "
            />
            <SharedRoom
              src="/joker.svg"
              username="Joker"
              ready={setPlayerReady}
            />
          </div>
        </div>
      </div>
    </>
  );
}
