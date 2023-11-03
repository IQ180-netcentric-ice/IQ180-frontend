import { useState } from "react";
import Image from "next/image";

interface SharedRoomProps {
  src: string;
  username: string | null;
  onClick: (no: number) => void;
  no: number;
  condition: boolean;
}

export default function SharedRoom({
  src,
  username,
  onClick,
  no,
  condition,
}: SharedRoomProps) {
  const [isReady, setIsReady] = useState(false);

  const handleButtonClick = () => {
    onClick(no);
    setIsReady(true);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={src}
          width={250}
          height={250}
          alt="background image"
          className="border-solid border-gray-500 m-[25px]"
        />
        <label className="border-black border-[1px] bg-[#999999] p-1 text-white text-3xl rounded-lg">
          {username}
        </label>
        <button
          className={`px-8 py-4 mt-4 border-black border-solid border-[1px] ${
            condition ? "bg-green-500" : "bg-gray-300"
          } text-black rounded-lg border-solid border-black`}
          onClick={handleButtonClick}
        >
          {condition ? "Ready" : "Not Ready"}
        </button>
      </div>
    </>
  );
}
