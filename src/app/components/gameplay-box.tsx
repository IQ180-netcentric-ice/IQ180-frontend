import ProblemNumberButton from "./problem-number-button";
import CalculatorButton from "./calculator-button";
interface GamePlayBoxProps {
  goal: any;
}

export default function GamePlayBox({ goal }: GamePlayBoxProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-10 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]">
        <div className="flex flex-row justify-between w-[750px] h-[450px]">
          <label className="border-black border-[1px] bg-[#00CDCD] p-2 text-white text-3xl flex flex-col items-center justify-center rounded-lg w-[180px] h-[60px]">
            goal : {goal}
          </label>
          <label className="border-black border-[1px] bg-purple-500 p-2 text-white text-3xl flex flex-col items-center justify-center rounded-lg w-[150px] h-[80px]">
            Timer
          </label>
        </div>
        <label className="text-4xl border-solid border-black border-[1px] bg-[#FFFFFF] text-black flex flex-col items-center justify-center w-[400px] h-[200px] m-[20px]">
          Hello
        </label>
        <div className="flex flex-row items-center justify-around w-[800px] h-[70px] m-[50px]">
          <ProblemNumberButton text="1" />
          <ProblemNumberButton text="2" />

          <ProblemNumberButton text="3" />

          <ProblemNumberButton text="4" />

          <ProblemNumberButton text="5" />
        </div>
        <div className="flex flex-row items-center justify-between w-[600px] h-[100px]">
          <CalculatorButton text="+" />

          <CalculatorButton text="-" />

          <CalculatorButton text="×" />

          <CalculatorButton text="÷" />

          <CalculatorButton text="√" />

          <CalculatorButton text="!" />
        </div>
        <div className="flex flex-row items-center justify-around w-[600px] h-[100px] m-[10px]">
          <CalculatorButton text="^" />

          <CalculatorButton text="(" />

          <CalculatorButton text=")" />

          <button className="w-[120px] h-12 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
            UNDO
          </button>
          <button className="w-[120px] h-12 bg-green-500 hover:bg-green-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
