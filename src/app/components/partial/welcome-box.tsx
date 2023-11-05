import Image from "next/image";
interface WelcomeBoxProps {
  seconds: number;
  user: string;
}

export default function WelcomeBox({
  seconds,
  user,
}: WelcomeBoxProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-5 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]">
        <div className="text-[#29F008] flex border border-[#fff] p-2 bg-black rounded-lg ml-[670px]">
          <div className="flex flex-col items-center">
            <span className="text-xl">00</span>
          </div>
          <span className="text-xl">:</span>
          <div className="flex flex-col items-center">
            {seconds < 10 ? (
              <span className="text-xl">0{seconds}</span>
            ) : (
              <span className="text-xl">{seconds}</span>
            )}
          </div>
        </div>

        <Image
          src="/smarter-together.png"
          width={150}
          height={150}
          alt="background image"
          className="border-solid border-gray-500 m-[25px]"
        />
        <label className="text-2xl text-black font-bold">
          Welcom to IQ180,
        </label>
        <label className="text-2xl text-red-500 font-bold">{user}</label>
        <div className="m-[10px] flex p-1  w-[750px] h-[250px] rounded-lg">
          <label className="text-black text-xl">
            Five given numbers can be used once, try to use any operations to
            get the answer. Each round you have 2 minutes to solve the question.
            If both players did not finish on time, a point will be given to the
            closest answer. If both players were correct, a point will be given
            to the faster player. Winner have to play first in the next round.
          </label>
        </div>
        {/* <button className="text-white bg-blue-500 h-[100px] w-[200px] border-transparent border-solid border-[1px] rounded-xl hover:transform hover:-translate-y-1 hover:shadow-md">
          Continue
        </button> */}
      </div>
    </div>
  );
}
