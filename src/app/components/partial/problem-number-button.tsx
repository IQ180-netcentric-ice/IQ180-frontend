import { useState, useEffect } from "react";

interface ProblemNumberButtonProps {
  onNumberClick: (text: string | boolean) => void;
  usedNumber: Set<string>;
  usage: (string | boolean)[];
  text: string;
}

export default function ProblemNumberButton({
  onNumberClick,
  usedNumber,
  usage,
  text,
}: ProblemNumberButtonProps): JSX.Element {
  // const [isUse, setIsUse] = useState(false);

  const handleButtonClick = () => {
    if (!usedNumber.has(usage[0] as string)) {
      // setIsUse(true);
      onNumberClick(usage[0]);
    }
  };

  // useEffect(() => {
  //   if (usage.length > 1 && usage[1]) {
  //     setIsUse(false);
  //   }
  // }, [usage]);

  return (
    <button
      className={`w-[80px] h-[80px] ${
        usage[1] ? "bg-[#FFBB54]" : "bg-gray-500"
      }  hover:transform hover:-translate-y-1 hover:shadow-md text-white text-5xl font-semibold rounded-md`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
