import Image from "next/image";
interface StandbyBoxProps {
  user: string;
  time: number;
}

export default function StandbyBox({
  user,
  time,
}: StandbyBoxProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]">
        <div className="flex flex-row justify-end">
          <label className="countdown border-white border-[1px] bg-gray-800 p-2 text-red-500 text-3xl flex flex-col items-center justify-center rounded-lg w-[150px] h-[80px]">
            {time}
          </label>
        </div>
        <Image
          src="/smarter-together.png"
          width={150}
          height={150}
          alt="background image"
          className="border-solid border-gray-500 m-[25px]"
        />
        <label className="text-2xl text-black font-bold">Waiting for</label>
        <label className="text-2xl text-blue-700 font-bold">{user}</label>
        <div className="m-[10px] flex p-1  w-[750px] h-[250px] rounded-lg">
          <label className="text-black text-xl">
            Once the time is out, you will be sent to the game.
          </label>
        </div>
      </div>
    </div>
  );
}
