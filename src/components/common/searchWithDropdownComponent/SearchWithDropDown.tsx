import styled from "@emotion/styled";
import { Input, InputLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const StyledSearchwithDropDown = styled.div`
display:flex;
gap:25px;
align-item:center;

.search-dropdown-input{

  
}
.addrecepie-label{
    padding-bottom:7px;
    display:flex;
    align-items:center;
}
`;
type SearchWithDropDownProps = {
  label?: string;
  url: string;
  placeholder: string;
  onSelect: (elm: string) => void;
  dropDownSearch: (
    url: string,
    params: string,
    callback: React.Dispatch<React.SetStateAction<Option[]>>
  ) => void;
  elmKey: string;
};

type Option = Partial<{
  sys_id: string;
  [key: string]: string;
}>;

export default function SearchWithDropDown({
  label,
  placeholder,
  url,
  dropDownSearch,
  onSelect,
  elmKey,
}: SearchWithDropDownProps) {
  const [textInputValue, setTextInputValue] = useState("");
  const [dropDownList, setDropDownList] = useState<Option[]>([]);

  useEffect(() => {
    dropDownSearch(url, textInputValue, setDropDownList);
  }, [url, textInputValue, setDropDownList, dropDownSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextInputValue(value);
  };
  return (
    <StyledSearchwithDropDown>
      <InputLabel className="addrecepie-label" htmlFor="text-input">
        {label || ""}
      </InputLabel>
      <span>
        <TextField
          className="search-dropdown-input"
          placeholder={placeholder}
          id="text-input"
          type="text"
          onInput={handleInputChange}
          defaultValue={textInputValue}
        />
        <div>
          {/* {dropDownList.length && dropDownList.map((elm) => {
            return <li key={elm.sys_id}>{elm[elmKey]}</li>;
          })} */}
        </div>
      </span>
    </StyledSearchwithDropDown>
  );
}
