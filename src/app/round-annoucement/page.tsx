"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RoundAnnoucementBox from "../components/partial/round-annoucement-box";
export default function Page() {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <RoundAnnoucementBox goal="string" winner="player1" />
    </>
  );
}
