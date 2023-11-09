import Image from "next/image";
import { useEffect, useState } from "react";

interface AnswerSubmitModalProps {
  isCorrect: boolean;
  onClose: () => void; // Function to close the modal
}

export default function AnswerSubmitModal({
  isCorrect,
  onClose, // Receive the close function from the parent component
}: AnswerSubmitModalProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[300px] h-[300px]">
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        <label className="text-2xl text-black font-bold">Waiting for</label>
        <label className="text-2xl text-blue-700 font-bold">Player2!</label>
        <div className="m-[10px] flex p-1 w-[750px] h-[250px] rounded-lg justify-center">
          {isCorrect ? (
            <p className="text-green-600 text-xl font-semibold">
              Correct Answer!
            </p>
          ) : (
            <p className="text-red-600 text-xl font-semibold">
              Incorrect Answer!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
