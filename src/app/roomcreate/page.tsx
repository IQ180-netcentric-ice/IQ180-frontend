"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import RoomInput from "../components/partial/waitingroom-input";
// import RoomDropdown from "../components/waitingroom-dropdown";
import { useRouter } from "next/navigation";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function NamePage() {
  // useEffect(() => {
  //   console.log("hi");
  //   alert("hello world");
  // }, []);

  // const [noRound, setNoRound] = useState<string>();
  // const [timePerRound, setTimePerRound] = useState<string>();

  // const handleNoRoundChange = (options: string) => {
  //   setNoRound(options);
  //   alert(noRound);
  // };

  // const handleTimePerRoundChange = (options: string) => {
  //   setTimePerRound(options);
  //   alert(timePerRound);
  // };

  const [option, setOption] = useState("");

  const handleOptionChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
    alert(option);
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
            <RoomInput text="Room's Name" />
            <RoomInput text="Room's Password" />
            <RoomDropdown
              items={5}
              text={"# of Rounds"}
              onOptionChange={handleOptionChange}
            />
            <RoomDropdown
              items={3}
              text={"Time per round"}
              onOptionChange={handleOptionChange}
            />
          </div>
          <div className="flex flex-row justify-between w-[150px] ml-[360px] mt-[181px]">
            <button
              className="text-white bg-[#CBCBCB] w-[70px] border-black border-solid border-[2px] hover:transform hover:-translate-y-1 hover:shadow-md"
              onClick={() => router.push("/roomcreate/shared-room")}
            >
              Create
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
  // const [option, setOption] = useState("");

  let numberList: string[] = [];

  for (let i = 0; i < items; i++) {
    numberList.push((i + 1).toString());
  }

  // const handleChange = (event: SelectChangeEvent) => {
  //   setOption(event.target.value);
  //   // onOptionChange(option);
  // };

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
              console.log(typeof i);
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
