import { useState } from "react";

interface RoomInputProps {
  text: string;
}

export default function RoomInput({ text }: RoomInputProps): JSX.Element {
  const [roomInfo, setRoomInfo] = useState<string | number>();

  return (
    <div className="gap-[23px] flex flex-row">
      <div className="text-[#494949] text-[14px] w-[130px] flex justify-end">
        {text}
      </div>
      <input
        required
        type="text"
        className="bg-[#999999] text-white w-[340px]"
        maxLength={10}
        value={roomInfo}
        onChange={(e) => setRoomInfo(e.target.value)}
      />
    </div>
  );
}
