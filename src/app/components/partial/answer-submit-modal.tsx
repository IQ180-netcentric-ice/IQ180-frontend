import Image from "next/image";
import { useEffect, useState } from "react";

interface AnswerSubmitModalProps {
  text: string;
  onClose: () => void; // Function to close the modal
}

export default function AnswerSubmitModal({
  text,
  onClose, // Receive the close function from the parent component
}: AnswerSubmitModalProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-start items-center bg-[#DCDCDC] w-[300px] h-[300px]">
        <button
          className="close-button bg-red-300 rounded-full p-[10px] "
          onClick={onClose}
        >
          <span>&times;</span>
        </button>
        <label className="text-2xl text-black font-bold">Your Answer Is</label>
        <label className="text-2xl text-blue-700 font-bold">{text}</label>
      </div>
    </div>
  );
}
