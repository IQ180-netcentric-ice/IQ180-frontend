import Image from "next/image";
interface StandbyBoxProps {
  text: string;
}

export default function StandbyBox({ text }: StandbyBoxProps): JSX.Element {
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
        <div className="m-[10px] flex p-1  w-[750px] h-[250px] rounded-lg">
          <label className="text-black text-xl">
            Once the time is out, please click continue button and you will be
            sent to the results.
          </label>
        </div>
        <button className="text-white bg-blue-500 h-[100px] w-[200px] border-transparent border-solid border-[1px] rounded-xl hover:transform hover:-translate-y-1 hover:shadow-md">
          Continue
        </button>
      </div>
    </div>
  );
}
