import Image from "next/image";
interface RoundAnnoucementBoxProps {
  goal: string;
  player1: string;
  player2: string;
  answer1: string;
  answer2: string;
  time_used1: string;
  time_used2: string;
}

export default function RoundAnnoucementBox({
  goal,
  player1,
  player2,
  answer1,
  answer2,
  time_used1,
  time_used2,
}: RoundAnnoucementBoxProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-zinc-300 w-[800px] h-[500px]">
        <label className="p-[20px] border-solid border-[1px] bg-[#FE6868] text-4xl text-white font-bold">
          Goal Number : {goal}
        </label>
        <div className="m-[20px] flex flex-col items-center p-1 w-[750px] h-[250px] rounded-lg">
          <div className="w-[625px] h-[120px] text-black text-bold text-4xl m-[26px] py-[38px] px-[24px] flex flex-row justify-around">
            <div>playername</div>
            <div>answer</div>
            <div>time used</div>
          </div>
          <div className="w-[625px] h-[120px] bg-white text-black text-bold text-4xl m-[26px] py-[38px] px-[24px] flex flex-row justify-around">
            <div>{player1}</div> <div>{answer1}</div> <div>{time_used1}</div>
          </div>
          <div className="w-[625px] h-[120px] bg-white text-black text-bold text-4xl py-[38px] px-[24px] flex flex-row justify-around">
            <div>{player2}</div> <div>{answer2}</div> <div>{time_used2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
