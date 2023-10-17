import { useState } from "react";
interface ProblemNumberButtonProps {
  text: string;
}

export default function ProblemNumberButton({
  text,
}: ProblemNumberButtonProps): JSX.Element {
  const [isUse, setIsUse] = useState(false);
  const handleButtonClick = () => {
    setIsUse(!isUse);
  };
  return (
    <button
      className={`w-[80px] h-[80px] ${
        isUse ? "bg-gray-500" : "bg-[#FFBB54]"
      }  hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
