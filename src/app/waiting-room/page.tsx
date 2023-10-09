"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import RoomInput from "../components/room-input";
import RoomDropdown from "../components/room-dropdown";
import { useRouter } from "next/navigation";

export default function NamePage() {
  // useEffect(() => {
  //   console.log("hi");
  //   alert("hello world");
  // }, []);

  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

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
        <div className="border-solid border-black border-[1px] rounded-lg flex flex-col bg-[#DCDCDC] w-[532px] h-[573px]">
          <div className="font-bold text-[#737373] text-[24px] mt-[34px] ml-[25px] mb-[34px]">
            Room Create
          </div>
          <div className="flex flex-col gap-[20px]">
            <RoomInput text="Room's Name" />
            <RoomInput text="Room's Password" />
            <RoomDropdown items={5} text={"# of Rounds"} />
            <RoomDropdown items={3} text={"Time per round"} />
          </div>
          <div className="flex flex-row justify-between w-[150px] ml-[360px] mt-[181px]">
            <button className="text-white bg-[#CBCBCB] w-[70px] border-black border-solid border-[2px] hover:transform hover:-translate-y-1 hover:shadow-md">
              Create
            </button>
            <button
              className="text-white bg-[#CBCBCB] w-[70px] border-black border-solid border-[2px] hover:transform hover:-translate-y-1 hover:shadow-md"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
