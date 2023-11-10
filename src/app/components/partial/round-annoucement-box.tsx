import Image from "next/image";
import { useRouter } from "next/navigation";
interface RoundAnnoucementBoxProps {
  goal: string;
  winner: string | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function RoundAnnoucementBox({
  goal,
  winner,
}: RoundAnnoucementBoxProps): JSX.Element {
  const router = useRouter();
  const handleGoToEndGame = () => {
    router.push("/end-game");
  };
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-zinc-300 w-[800px] h-[500px]">
        <label className="p-[20px] border-solid border-[1px] bg-[#FE6868] text-4xl text-white font-bold">
          Goal Number : {goal}
        </label>
        <div className="m-[20px] flex flex-col items-center p-1 w-[750px] h-[250px] rounded-lg">
          <div className="w-[625px] h-[120px] bg-white text-black text-bold text-4xl m-[26px] py-[38px] px-[24px] flex flex-row justify-around">
            <div>winner is {winner} !!!</div>
          </div>
          <button
            className="bg-green-500 p-[6px] rounded-md"
            onClick={handleGoToEndGame}
          >
            go to congrats video
          </button>
        </div>
      </div>
    </div>
  );
}
