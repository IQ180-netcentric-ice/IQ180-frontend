"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StandbyBox from "../components/partial/standby-box";
export default function Page() {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <StandbyBox text="1" />
    </>
  );
}
