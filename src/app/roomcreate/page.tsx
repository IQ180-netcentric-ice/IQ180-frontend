"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";

export default function NamePage() {
  const [rounds, setRounds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [roomNo, setRoomNo] = useState<string>();

  const handleRoundsChange = (event: SelectChangeEvent) => {
    setRounds(event.target.value);
  };

  const handleMinutesChange = (event: SelectChangeEvent) => {
    setMinutes(event.target.value);
  };

  const handleRoomNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomNo(event.target.value);
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>IQ 180</title>
      </Head>
      <Image
        fill={true}
        src="/background_iq180.svg"
        alt="background image"
        className="z-[-1]"
      />
      <div className="flex flex-col items-center justify-center z-[1] h-[100vh]">
        <div className="border-solid border-black border-[1px] rounded-lg flex flex-col bg-[#DCDCDC] w-[532px] h-[573px]">
          <div className="font-bold text-[#737373] text-[24px] mt-[34px] ml-[25px] mb-[34px]">
            Room Create
          </div>
          <div className="flex flex-col gap-[20px]">
            <RoomInput text="Room Id" onInputChange={handleRoomNoChange} />
            {/* <RoomInput
              text="Room's Password"
              onInputChange={handleRoomNoChange}
            /> */}
            <RoomDropdown
              items={3}
              text={"# of Rounds"}
              onOptionChange={handleRoundsChange}
            />
            <RoomDropdown
              items={3}
              text={"Time per round"}
              onOptionChange={handleMinutesChange}
            />
          </div>
          <div className="flex flex-row justify-between w-[150px] ml-[360px] mt-[181px]">
            <button
              className="text-white bg-[#CBCBCB] w-[70px] border-black border-solid border-[2px] hover:transform hover:-translate-y-1 hover:shadow-md"
              disabled={minutes === "" && rounds === "" && roomNo === ""}
            >
              <Link
                href={{
                  pathname: "/roomcreate/shared-room",
                  query: { rounds, minutes, roomNo },
                }}
              >
                Create
              </Link>
            </button>

            <button
              className="text-white bg-[#CBCBCB] w-[70px] border-black border-solid border-[2px] hover:transform hover:-translate-y-1 hover:shadow-md"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

interface RoomDropdownProps {
  items: number;
  text: string;
  onOptionChange: (option: SelectChangeEvent) => void;
}

function RoomDropdown({ items, text, onOptionChange }: RoomDropdownProps) {
  let numberList: string[] = [];

  for (let i = 0; i < items; i++) {
    numberList.push((i + 1).toString());
  }

  return (
    <>
      <div className="flex flex-row gap-[15px]">
        <div className="text-[#494949] text-[14px] w-[130px] flex justify-end items-center">
          {text}
        </div>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className="bg-[#999999]"
          size="small"
          required
        >
          <Select
            labelId="label-option"
            id="option"
            onChange={onOptionChange}
            label="Option"
          >
            {numberList.map((i, index) => {
              return (
                <MenuItem value={i} key={index}>
                  {i}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

interface RoomInputProps {
  text: string;
  onInputChange: (option: React.ChangeEvent<HTMLInputElement>) => void;
}

function RoomInput({ text, onInputChange }: RoomInputProps): JSX.Element {
  return (
    <div className="gap-[23px] flex flex-row">
      <div className="text-[#494949] text-[14px] w-[130px] flex justify-end">
        {text}
      </div>
      <input
        required
        type="text"
        placeholder="6 digits room id"
        className="bg-[#999999] text-white w-[340px] placeholder:text-white"
        maxLength={6}
        minLength={6}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  );
}