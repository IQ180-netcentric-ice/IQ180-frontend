"use client";
import Image from "next/image";
import GamePlayBox from "../partial/gameplay-box";

interface GamePlayRoomProps {
  timer: number;
  prob: number[];
  sol: number;
  submit: (solution: number, userResult: number) => void;
  check: () => void;
}

export default function PlayRoom({
  timer,
  prob,
  sol,
  submit,
  check,
}: GamePlayRoomProps) {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <GamePlayBox
        goal={sol}
        time={timer}
        prob={prob}
        submit={submit}
        check={check}
      />
    </>
  );
}
