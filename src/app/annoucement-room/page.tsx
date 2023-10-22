"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RoundAnnoucementBox from "../components/round-annoucement-box";

export default function Page() {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <RoundAnnoucementBox
        goal="33"
        player1="guy"
        answer1="33"
        time_used1="0:01"
        player2="jedi"
        answer2="2304234"
        time_used2="5:00"
      />
    </>
  );
}
