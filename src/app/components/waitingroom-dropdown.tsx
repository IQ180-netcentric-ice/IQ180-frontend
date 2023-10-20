import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

interface RoomDropdownProps {
  items: number;
  text: string;
  onOptionChange: (option: string) => void;
}

export default function SelectVariants({
  items,
  text,
  onOptionChange,
}: RoomDropdownProps) {
  const [option, setOption] = useState("");

  let numberList: string[] = [];

  for (let i = 0; i < items; i++) {
    numberList.push((i + 1).toString());
  }

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
    onOptionChange(option);
  };

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
            value={option}
            onChange={handleChange}
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
