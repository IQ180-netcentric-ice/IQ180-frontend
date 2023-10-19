"use client";
import Image from "next/image";
import GamePlayBox from "../components/gameplay-box";
export default function Page() {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <GamePlayBox goal={1} />
    </>
  );
}
