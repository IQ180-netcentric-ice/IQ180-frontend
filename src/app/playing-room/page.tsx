"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page() {
  return (
    <>
      <Image
        fill={true}
        src="/background-city-pink.svg"
        alt="background image"
        className="z-[-1]"
      />
      <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
        <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]"></div>
      </div>
    </>
  );
}
