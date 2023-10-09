import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

interface RoomDropdownProps {
  items: number;
  text: string;
}

export default function SelectVariants({ items, text }: RoomDropdownProps) {
  const [option, setOption] = useState("");

  let numberList: number[] = [];

  for (let i = 0; i < items; i++) {
    numberList.push(i + 1);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
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
        >
          <Select
            labelId="label-option"
            id="option"
            value={option}
            onChange={handleChange}
            label="Option"
          >
            {numberList.map((i, index) => (
              <MenuItem value={i} key={index}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
