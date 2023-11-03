interface CalculatorButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CalculatorButton({
  text,
  onClick,
}: CalculatorButtonProps): JSX.Element {
  const playSound = () => {
    const audio = new Audio("/sounds/sfx/tood.m4a");
    audio.play();
  };
  return (
    <button
      className="w-16 h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 text-white text-3xl font-semibold rounded-full"
      onClick={(e) => {
        playSound(); // Play the sound effect
        onClick(e); // Trigger the original onClick function
      }}
    >
      {text}
    </button>
  );
}
