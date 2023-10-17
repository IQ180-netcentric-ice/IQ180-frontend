"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isReady2, setIsReady2] = useState(false);

  const handleButtonClick = () => {
    // Toggle the "ready" state
    console.log(isReady);
    setIsReady(!isReady);
  };
  const handleButtonClick2 = () => {
    // Toggle the "ready" state
    console.log(isReady);
    setIsReady2(!isReady2);
  };

  return (
    <>
      <Image
        fill={true}
        src="/background_iq180.svg"
        alt="background image"
        className="z-[-1]"
      />
      <div className="flex flex-row items-center justify-around z-[1] h-[100vh]">
        <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-around items-center bg-[#DCDCDC] w-[400px] h-[500px]">
          <div className="m-[25px] items-center flex flex-col justify-between">
            <label className="m-[5px] p-2 border-solid border-black-[1px] rounded-lg  bg-[#999999]">
              ARKHAM AYSLUM
            </label>
            <label className="m-[5px] p-2 border-solid border-black-[1px] rounded-lg  bg-[#999999]">
              ID
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-black"># of Rounds</label>
            <select name="selectedFruit" className="text-white bg-[#999999]">
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={7}>7</option>
            </select>
            <label className="text-black">Time per Round</label>
            <select name="selectedFruit" className="text-white bg-[#999999]">
              <option value={30}>30 seconds</option>
              <option value={60}>60 seconds</option>
              <option value={90}>90 seconds</option>
              <option value={120}>120 seconds</option>
            </select>
          </div>
        </div>
        <div className="m-[25px] border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[1000px] h-[500px]">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/batman.svg"
                width={250}
                height={250}
                alt="background image"
                className="border-solid border-gray-500 m-[25px]"
              />
              <label className="border-black border-[1px] bg-[#999999] p-1 text-white text-3xl rounded-lg">
                BATMAN
              </label>
              <button
                className={`px-8 py-4 mt-4 border-black border-solid border-[1px] ${
                  isReady ? "bg-green-500" : "bg-gray-300"
                } text-black rounded-lg border-solid border-black`}
                onClick={handleButtonClick}
              >
                {isReady ? "Ready" : "Not Ready"}
              </button>
            </div>
            <Image
              src="/images/vs pic.svg"
              width={200}
              height={20}
              alt="background image"
              className="border-solid border-gray-500 m-[25px] "
            />
            <div className="flex flex-col items-center">
              <Image
                src="/images/joker.svg"
                width={250}
                height={250}
                alt="background image"
                className="border-solid border-gray-500 m-[25px] "
              />
              <label className="border-black border-[1px] bg-purple-500 p-2 text-white text-3xl rounded-lg">
                JOKER
              </label>
              <button
                className={`px-8 py-4 mt-4 border-solid border-black border-[1px] ${
                  isReady2 ? "bg-green-500" : "bg-gray-300"
                } text-black rounded-lg border-solid border-black`}
                onClick={handleButtonClick2}
              >
                {isReady2 ? "Ready" : "Not Ready"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
