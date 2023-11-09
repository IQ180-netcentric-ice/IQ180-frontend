import ProblemNumberButton from "./problem-number-button";
import CalculatorButton from "./calculator-button";
import { useState, useEffect } from "react";
import { router } from "websocket";
interface GamePlayBoxProps {
  goal: number;
  time: number;
  prob: number[];
  submit: (solution: number, userResult: number) => void;
  check: () => void;
}

export default function GamePlayBox({
  goal,
  time,
  prob,
  submit,
  check,
}: GamePlayBoxProps): JSX.Element {
  const [operands, setOperands] = useState<string[]>([]);
  const [usedNumbers, setUsedNumbers] = useState<Set<string>>(new Set());
  const [number1, setNumber1] = useState([prob[0].toString(), true]); //prob[0]?.toString()
  const [number2, setNumber2] = useState([prob[1].toString(), true]);
  const [number3, setNumber3] = useState([prob[2].toString(), true]);
  const [number4, setNumber4] = useState([prob[3].toString(), true]);
  const [number5, setNumber5] = useState([prob[4].toString(), true]);

  const operandOnchange = (value: string) => {
    setOperands((prevOperands) => [...prevOperands, value]);
  };
  const handleNumberClick = (text: string | boolean) => {
    if (!usedNumbers.has(text as string)) {
      usedNumbers.add(text as string);
      setUsedNumbers(new Set(usedNumbers));
      operandOnchange(text as string);

      if (text == number1[0]) {
        setNumber1([text, false]);
      }
      if (text == number2[0]) {
        setNumber2([text, false]);
      }
      if (text == number3[0]) {
        setNumber3([text, false]);
      }
      if (text == number4[0]) {
        setNumber4([text, false]);
      }
      if (text == number5[0]) {
        setNumber5([text, false]);
      }
    }
  };
  const handleUndoClick = () => {
    if (operands.length > 0) {
      const updatedOperands = [...operands];
      const lastOperand = updatedOperands.pop() as string;

      setOperands(updatedOperands);

      if (usedNumbers.has(lastOperand)) {
        setUsedNumbers((prevUsedNumbers) => {
          const updatedUsedNumbers = new Set(prevUsedNumbers);
          updatedUsedNumbers.delete(lastOperand);
          return updatedUsedNumbers;
        });
      }
      if (lastOperand == number1[0]) {
        setNumber1([number1[0], true]);
      }
      if (lastOperand == number2[0]) {
        setNumber2([number2[0], true]);
      }
      if (lastOperand == number3[0]) {
        setNumber3([number3[0], true]);
      }
      if (lastOperand == number4[0]) {
        setNumber4([number4[0], true]);
      }
      if (lastOperand == number5[0]) {
        setNumber5([number5[0], true]);
      }
    }
  };

  const handleSubmitClick = () => {
    if (usedNumbers.size !== 5) {
      console.log(prob);
    } else {
      const result = eval(operands.join(" "));
      submit(goal, result);
    }
  };

  // useEffect(() => {
  //   console.log("Change from default");
  //   setNumber1([prob[0].toString(), true]);
  //   setNumber2([prob[1].toString(), true]);
  //   setNumber3([prob[2].toString(), true]);
  //   setNumber4([prob[3].toString(), true]);
  //   setNumber5([prob[4].toString(), true]);
  // }, [time]);

  return (
    <div className="flex flex-row items-center justify-center z-[1] h-[100vh]">
      <div className="m-[25px] p-10 border-solid border-black border-[1px] rounded-lg flex flex-col justify-center items-center bg-[#DCDCDC] w-[800px] h-[500px]">
        <div className="flex flex-row justify-between w-[750px] h-[450px]">
          <label className="border-black border-[1px] bg-[#00CDCD] p-2 text-white text-3xl flex flex-col items-center justify-center rounded-lg w-[180px] h-[60px]">
            goal : {goal}
          </label>
          <label className="countdown border-white border-[1px] bg-gray-800 p-2 text-red-500 text-3xl flex flex-col items-center justify-center rounded-lg w-[150px] h-[80px]">
            {time}
          </label>
        </div>
        <label className="text-4xl border-solid border-black border-[1px] bg-[#FFFFFF] text-black flex flex-col items-center justify-center w-[400px] h-[200px] m-[20px]">
          {operands.join(" ")}
        </label>
        <div className="flex flex-row items-center justify-around w-[800px] h-[70px] m-[50px]">
          <ProblemNumberButton
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
            usage={number1}
          />
          <ProblemNumberButton
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
            usage={number2}
          />

          <ProblemNumberButton
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
            usage={number3}
          />

          <ProblemNumberButton
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
            usage={number4}
          />

          <ProblemNumberButton
            onNumberClick={handleNumberClick}
            usedNumber={usedNumbers}
            usage={number5}
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
          <button
            className="w-[120px] h-12 bg-green-500 hover:bg-green-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-lg"
            onClick={handleSubmitClick}
          >
            SUBMIT
          </button>
          <button
            className="w-[120px] h-12 bg-green-500 hover:bg-green-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-lg"
            onClick={() => check()}
          >
            CHECK
          </button>
        </div>
      </div>
    </div>
  );
}
