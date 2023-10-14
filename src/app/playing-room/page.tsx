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
        <div className="m-[25px] p-10 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]">
          <div className="flex flex-row justify-between w-[750px] h-[450px]">
            <label className="border-black border-[1px] bg-[#00CDCD] p-2 text-white text-3xl flex flex-col items-center justify-center rounded-lg w-[180px] h-[60px]">
              Goal : XX
            </label>
            <label className="border-black border-[1px] bg-purple-500 p-2 text-white text-3xl flex flex-col items-center justify-center rounded-lg w-[150px] h-[80px]">
              Timer
            </label>
          </div>
          <label className="text-4xl border-solid border-black border-[1px] bg-[#FFFFFF] text-black flex flex-col items-center justify-center w-[400px] h-[200px] m-[20px]">
            Hello
          </label>
          <div className="flex flex-row items-center justify-around w-[800px] h-[70px] m-[50px]">
            <button className="w-[80px] h-[80px] bg-[#FFBB54] hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md">
              1
            </button>
            <button className="w-[80px] h-[80px] bg-[#FFBB54] hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md">
              2
            </button>
            <button className="w-[80px] h-[80px] bg-[#FFBB54] hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md">
              3
            </button>
            <button className="w-[80px] h-[80px] bg-[#FFBB54] hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md">
              4
            </button>
            <button className="w-[80px] h-[80px] bg-[#FFBB54] hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md">
              5
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-[600px] h-[100px]">
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              +
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              -
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              ×
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              ÷
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              √
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              !
            </button>
          </div>
          <div className="flex flex-row items-center justify-around w-[600px] h-[100px] m-[10px]">
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              ^
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              (
            </button>
            <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              )
            </button>
            <button className="w-[120px] h-12 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
              UNDO
            </button>
            <button className="w-[120px] h-12 bg-green-500 hover:bg-green-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-lg">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
