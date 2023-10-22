import { useState, useEffect } from "react";

interface ProblemNumberButtonProps {
  text: string;
  onNumberClick: (text: string) => void;
  usedNumber: Set<string>;
  usage: (string | boolean)[];
}

export default function ProblemNumberButton({
  text,
  onNumberClick,
  usedNumber,
  usage,
}: ProblemNumberButtonProps): JSX.Element {
  const [isUse, setIsUse] = useState(false);

  const handleButtonClick = () => {
    if (!usedNumber.has(text)) {
      setIsUse(true);
      onNumberClick(text);
    }
  };
  useEffect(() => {
    console.log("useEffect triggered");
    if (usage && usage.length > 1 && usage[1]) {
      setIsUse(false);
    }
  }, [usage]);

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
