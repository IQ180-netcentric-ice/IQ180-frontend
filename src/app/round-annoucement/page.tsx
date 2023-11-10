"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RoundAnnoucementBox from "../components/partial/round-annoucement-box";

export default function Page() {
  const router = useRouter();
  const name = localStorage.getItem("winner");

  const handleGoToEndGame = () => {
    // Navigate to the end-game page (replace '/end-game' with your actual page URL)
    console.log("hello");
  };

  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <RoundAnnoucementBox
        goal="string"
        winner={name}
        onClick={handleGoToEndGame}
      />
    </>
  );
}
