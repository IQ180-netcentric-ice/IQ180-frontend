"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnswerSubmitModal from "../components/partial/answer-submit-modal";
import PlayerScoreBox from "../components/partial/player-score-box";
import GamePlayBox from "../components/partial/gameplay-box";

export default function Page() {
  const handle = () => {
    console.log("handle");
  };
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <div className="flex flex-row justify-center items-center">
        <AnswerSubmitModal text="1" onClose={handle} />
        <PlayerScoreBox
          playerName1="guy"
          playerName2="hewq"
          score1={1}
          score2={2}
        />
      </div>
    </>
  );
}
