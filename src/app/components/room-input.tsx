interface RoomInputProps {
  text: string;
}

export default function RoomInput({ text }: RoomInputProps): JSX.Element {
  return (
    <div className="gap-[23px] flex flex-row">
      <div className="text-[#494949] text-[14px] w-[130px] flex justify-end">
        {text}
      </div>
      <input
        type="text"
        className="bg-[#999999] text-white w-[340px]"
        maxLength={20}
      />
    </div>
  );
}
