import Image from "next/image";
import { useState } from "react";

interface HowToPlayBoxProps {
  onClose: () => void; // Function to close the modal
}

const dummyInstructions = [
  "Instruction 1: Use all number once.",
  "Instruction 2: Write in the correct order.",
  "Instruction 3: Do your best",
  // Add more instructions as needed
];

export default function HowToPlayBox({
  onClose, // Receive the close function from the parent component
}: HowToPlayBoxProps): JSX.Element {
  const [currentInstruction, setCurrentInstruction] = useState(0);

  const nextInstruction = () => {
    if (currentInstruction < dummyInstructions.length - 1) {
      setCurrentInstruction(currentInstruction + 1);
    }
  };

  const prevInstruction = () => {
    if (currentInstruction > 0) {
      setCurrentInstruction(currentInstruction - 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-start items-center bg-[#DCDCDC] w-[500px] h-[300px]">
        <button
          className="close-button bg-red-300 rounded-full p-[10px]"
          onClick={onClose}
        >
          <span>&times;</span>
        </button>
        <div className="flex flex-col justify-center items-center mt-[50px]">
          <label className="text-2xl text-black font-bold">
            {dummyInstructions[currentInstruction]}
          </label>
          <div className="mt-5 flex flex-row justify-around items-center">
            {currentInstruction > 0 && (
              <button
                onClick={prevInstruction}
                className="bg-yellow-500 p-[2px] mr-[10px]"
              >
                Previous Instruction
              </button>
            )}
            {currentInstruction < dummyInstructions.length - 1 && (
              <button
                onClick={nextInstruction}
                className="bg-yellow-500 p-[2px] ml-[10px]"
              >
                Next Instruction
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
