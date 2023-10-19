interface CalculatorButtonProps {
  text: string;
}

export default function CalculatorButton({
  text,
}: CalculatorButtonProps): JSX.Element {
  return (
    <button className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full">
      {text}
    </button>
  );
}