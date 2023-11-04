"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>IQ 180</title>
      </Head>

      <Image
        fill={true}
        src="/background_iq180.svg"
        alt="background image"
        className="z-[-1]"
      />
      <div className="flex flex-col items-center justify-center z-[1] h-[100vh]">
        <Image
          src="/smarter-together.png"
          width={400}
          height={300}
          alt="background image"
          className="border-solid border-gray-500 border-[1px]"
        />
        <div className="m-[25px] border-solid border-black border-[1px] rounded-lg flex flex-col justify-around items-center bg-[#DCDCDC] w-[300px] h-[150px]">
          <input
            maxLength={15}
            type="text"
            placeholder="Username"
            className="w-[200px] h-[40px] text-black text-center border-solid border-black border-[1px]"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            value={userInput}
          />

          <div className="flex flex-col justify-between h-[60px]">
            <button
              className="text-white bg-[#FFBB54] w-[70px] border-transparent border-solid border-[1px] rounded-xl hover:transform hover:-translate-y-1 hover:shadow-md"
              onClick={() => {
                localStorage.setItem("username", userInput);
                router.push("/roomcreate");
              }}
              disabled={userInput == ""}
            >
              Create
            </button>
            <button
              className="text-white bg-[#FFBB54] w-[70px] border-transparent border-solid border-[1px] rounded-xl hover:transform hover:-translate-y-1 hover:shadow-md"
              onClick={() => {
                localStorage.setItem("username", userInput);
                router.push("/join-room");
              }}
              disabled={userInput == ""}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
