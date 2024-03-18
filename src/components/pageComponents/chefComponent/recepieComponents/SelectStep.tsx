import styled from "@emotion/styled";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import React from "react";

type SelectStepProps = {
  selectedItem: string;
  handleItemChange: (e:SelectChangeEvent) => void;
  options: { step: string; details: string }[];
};
const SelectStepContainer = styled.div``;
export default function SelectStep({
  options,
  selectedItem,
  handleItemChange,
}: SelectStepProps) {
console.log({selectedItem})
  return (
    <SelectStepContainer>
      <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
        <InputLabel>Edit Step</InputLabel>
        <Select value={String(selectedItem)} onChange={handleItemChange}>
          {options.map((elm, index) => (
              <MenuItem key={index} value={String(index)}>Step {elm.step}</MenuItem>
          
          ))}
        </Select>
      </FormControl>
    </SelectStepContainer>
  );
}
