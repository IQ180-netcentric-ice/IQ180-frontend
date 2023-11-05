"use client";
import WelcomeBox from "@/app/components/partial/welcome-box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomeRoom() {
  const router = useRouter();
  const [timer, setTimer] = useState(10);
  const roomId = localStorage.getItem("roomId") || "587";
  const username = localStorage.getItem("username") as string;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    if (timer === 0) {
      router.push(`/game/${roomId}`);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <WelcomeBox seconds={timer} user={username} />
    </>
  );
}
