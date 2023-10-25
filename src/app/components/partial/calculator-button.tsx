interface CalculatorButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CalculatorButton({
  text,
  onClick,
}: CalculatorButtonProps): JSX.Element {
  return (
    <button
      className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
