import ProblemNumberButton from "./problem-number-button";
import CalculatorButton from "./calculator-button";
import { useState } from "react";
interface GamePlayBoxProps {
  goal: any;
}

export default function GamePlayBox({ goal }: GamePlayBoxProps): JSX.Element {
  const [operands, setOperands] = useState<string[]>([]);
  const [usedNumbers, setUsedNumbers] = useState<Set<string>>(new Set());
  const [number1, setNumber1] = useState(["1", true]);

  const operandOnchange = (value: string) => {
    setOperands((prevOperands) => [...prevOperands, value]);
  };
  const handleNumberClick = (text: string) => {
    if (!usedNumbers.has(text)) {
      usedNumbers.add(text);
      setUsedNumbers(new Set(usedNumbers));
      operandOnchange(text);
    }
  };
  const handleUndoClick = () => {
    if (operands.length > 0) {
      const updatedOperands = [...operands];
      const lastOperand = updatedOperands.pop();

      setOperands(updatedOperands);
      console.log(usedNumbers);
      console.log(operands);

      if (usedNumbers.has(lastOperand)) {
        setUsedNumbers((prevUsedNumbers) => {
          const updatedUsedNumbers = new Set(prevUsedNumbers);
          updatedUsedNumbers.delete(lastOperand);
          return updatedUsedNumbers;
        });
      }
      if (lastOperand == number1[0] && number1[1]) {
        setNumber1(["1", false]);
      }
    }
  };

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
          {operands.join(" ")}
        </label>
        <div className="flex flex-row items-center justify-around w-[800px] h-[70px] m-[50px]">
          <ProblemNumberButton
            text="1"
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
            usage={number1}
          />
          <ProblemNumberButton
            text="2"
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
          />

          <ProblemNumberButton
            text="3"
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
          />

          <ProblemNumberButton
            text="4"
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
          />

          <ProblemNumberButton
            text="5"
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
          />
        </div>
        <div className="flex flex-row items-center justify-between w-[600px] h-[100px]">
          <CalculatorButton text="+" onClick={() => operandOnchange("+")} />

          <CalculatorButton text="-" onClick={() => operandOnchange("-")} />

          <CalculatorButton text="×" onClick={() => operandOnchange("*")} />

          <CalculatorButton text="÷" onClick={() => operandOnchange("/")} />
        </div>
        <div className="flex flex-row items-center justify-around w-[600px] h-[100px] m-[10px]">
          <CalculatorButton text="(" onClick={() => operandOnchange("(")} />

          <CalculatorButton text=")" onClick={() => operandOnchange(")")} />

          <button
            className="w-[120px] h-12 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full"
            onClick={handleUndoClick}
          >
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
