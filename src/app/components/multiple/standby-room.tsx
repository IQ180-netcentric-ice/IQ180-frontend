"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StandbyBox from "../partial/standby-box";

interface StandbyRoomProps {
  username: string;
  timer: number;
}

export default function StandbyRoom({ username, timer }: StandbyRoomProps) {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <StandbyBox user={username} time={timer} />
    </>
  );
}
