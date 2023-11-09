import Image from "next/image";
import { useEffect, useState } from "react";

interface PlayerScoreBoxProps {
  playerName1: string;
  score1: number;
  playerName2: string;
  score2: number;
}

export default function PlayerScoreBox({
  playerName1,
  score1,
  playerName2,
  score2,
}: PlayerScoreBoxProps): JSX.Element {
  return (
    <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[300px] h-[300px]">
      <label className="text-2xl text-green font-bold">{playerName1}</label>
      <label className="text-2xl text-green-700 font-bold">
        score = {score1}
      </label>
      <label className="text-2xl text-green font-bold">{playerName2}</label>
      <label className="text-2xl text-green-700 font-bold">
        score = {score2}
      </label>
    </div>
  );
}
