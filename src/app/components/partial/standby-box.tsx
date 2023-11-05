import Image from "next/image";
import { useEffect, useState } from "react";

interface StandbyBoxProps {
  text: string;
}

export default function StandbyBox({ text }: StandbyBoxProps): JSX.Element {
  const tipsAndTricks = [
    "Tip: Try to use all the available numbers to achieve the goal.",
    "Tip: Use parentheses to control the order of operations.",
    "Tip: Make sure to double-check your solution before submitting.",
    "Tip: You can use addition, subtraction, multiplication, and division.",
    "Tip: Calm mind always help you perform better.",
    "Tip: Remember that it is just a game.",
    // Add more tips and tricks here
  ];

  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    // Select a random tip from the array
    const randomIndex = Math.floor(Math.random() * tipsAndTricks.length);
    setRandomTip(tipsAndTricks[randomIndex]);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]">
        <Image
          src="/smarter-together.png"
          width={150}
          height={150}
          alt="background image"
          className="border-solid border-gray-500 m-[25px]"
        />
        <label className="text-2xl text-black font-bold">Waiting for</label>
        <label className="text-2xl text-blue-700 font-bold">Player2!</label>
        <div className="m-[10px] flex p-1 w-[750px] h-[250px] rounded-lg justify-center">
          <label className="text-black text-xl">{randomTip}</label>
        </div>
      </div>
    </div>
  );
}
