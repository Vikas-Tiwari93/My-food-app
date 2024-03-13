import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonBase, Input, Switch, TextField } from "@mui/material";

import React, { ReactNode, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addRecepieSchema } from "../../../../utils/yupSchema/recepieSchema";
import styled from "@emotion/styled";
import SearchWithDropDown from "../../../common/searchWithDropdownComponent/SearchWithDropDown";
import IngredientsBullet from "./IngredientsBullet";
const StyledAddRecepieForm = styled.form`
display:flex;
flex-direction:column;
align-items:center;
  .upload-recepie-picture {
    padding: 10px;
    border: 1px solid silver;
    border-radius: 4px;
    width: 120px;
    height: 120px;
  }

  .recepie-uploader {
    position: absolute;
    z-index: 100;
    top: 10px;
    left: 10px;
  }
  .form-root-without-buttons{
    border-radius:10px;
    padding:20px;
    width:95%;
    box-shadow:2px 2px 2px 2px silver;

  }
  .recepie-uploader div,
  p {
    border: none;
  }
  .css-xb7zvf-MuiInputBase-root-MuiInput-root::before {
    border: none;
  }
  .css-xb7zvf-MuiInputBase-root-MuiInput-root::after {
    border: none;
  }
  .css-xb7zvf-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    border: none;
  }
  .recepie-uploader:hover {
    cursor: pointer;
  }
  .recepie-uploader input {
    border: none;
    height: 100px;
    opacity: 0;
  }
  .form-add-recepie-grid {
    display: grid;
    place-items: center;

    grid-template-columns: 1fr 1fr;
  }
  .grid-element-addrecepie {
  }
  .food-image-form {
    display: flex;
    justify-content: center;
    height: 150px;
    grid-row: span 2;
  }
  .select-ingredients-root {
    display: flex;
  }
  .select-ingredients-root {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  .bullet-root {
    margin-top:10px;
    margin-bottom:10px;
    padding: 10px;
    display: flex;
    border: 1px solid silver;
    border-radius:5px;
    height:100px;
  }
  .ingredients-select {
    width: 100%;
    padding: 8px 0px;
    display: flex;
justify-content:space-between;  }


  .ingredient-amount {
    width: 100px;
  }
  li {
    list-style: none;
  }
  .add-ingredient-icon{
    margin-left:7px;
font-size:14px;
    
  }
  .short-description{
    margin-top:10px;
    margin-bottom:10px;
  }
  .add-steps{
    margin-top:10px;
    margin-bottom:10px;
    
  }
  #buttons-root{
    width:90%;
    margin-top:20px;
    display:flex;
    justify-content:end;
    gap:30px;
  }
`;
type FormData = {
  name: string;
  email: string;
  password: string;
  file?: File;
  veg: boolean;
};
type Option = Partial<{
  sys_id: string;
  [key: string]: string;
}>;
export default function AddRecepieForm() {
  const [currentIngredients, setCurrentIngredients] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", amount: "" }]);
  const [uploadPicture, setUploadPicture] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (uploadPicture) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(uploadPicture);
    } else {
      setImagePreview(null);
    }
  }, [uploadPicture]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(addRecepieSchema),
  });

  const searchIngredientDropDown = (
    url: string,
    param: string,
    setState: React.Dispatch<React.SetStateAction<Option[]>>
  ) => {};

  const handleDropdownSelect = (elm: string) => {
    setCurrentIngredients(elm);
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setUploadPicture(file || null);
  };
  return (
    <StyledAddRecepieForm onSubmit={handleSubmit(onSubmit)}>
      <div className="form-root-without-buttons">
      <div className="form-add-recepie-grid">
        <TextField
          className="grid-element-addrecepie"
          label="Recepie name"
          fullWidth
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message as ReactNode}
        />

        <div
          className="food-image-form grid-element-addrecepie"
          style={{ position: "relative" }}
        >
          <img
            src={
              uploadPicture
                ? (imagePreview as string)
                : "/images/200219-A-QY194-002.avif"
            }
            alt=""
            className="upload-recepie-picture"
          />
          <Input
            className="recepie-uploader"
            type="file"
            onInput={handleFileChange}
            defaultValue={uploadPicture}
            {...register("file")}
            error={!!errors.file?.message}
          />
        </div>
        <TextField
          label="Recepie type"
          className="grid-element-addrecepie"
          fullWidth
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message as ReactNode}
        />
        <div className="ingredients-select">
          <SearchWithDropDown
            label="Search ingredients"
            placeholder="Add ingredients"
            url=""
            dropDownSearch={searchIngredientDropDown}
            onSelect={handleDropdownSelect}
            elmKey="name"
          />
          <TextField
            className="ingredient-amount"
            placeholder="Grams"
        
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentAmount(e.target.value)
            }
            value={currentAmount}
          />
          <Button variant="text" style={{height:"50px"}}>
            Add <i className="dx-icon-add add-ingredient-icon dx-icon-custom-style " ></i>
          </Button>
        </div>

        <span>
          <label htmlFor="">Veg</label>
          <Switch {...register("veg")} />
        </span>
      </div>
      {/* new block */}
      <div className="select-ingredients-root"></div>
      {/* new block */}
      <div className="bullet-root">
      
        {ingredients.length?ingredients.map((elm, index) => (
          <li key={index}>
            <IngredientsBullet elm={elm} />
          </li>
        )):`Start adding ingredients`}
      </div>
      {/* new block */}
      <TextField
        label="Short description"
        className="short-description"
        fullWidth
        variant="outlined"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message as ReactNode}
      />
<div>
<TextField
        type="text"
        multiline
        rows={4} 
        className="add-steps"
        label="Add one recepie step at a time"
        fullWidth
        variant="outlined"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message as ReactNode}
      />
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Button type="submit" variant="outlined" color="primary">
         Submit step
        </Button>
        <Button type="submit" variant="outlined" color="primary">
         Preview Steps
        </Button>
      </div>
      
</div>
</div>
      
      <div id="buttons-root">
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Button onClick={() => reset()} variant="contained" color="primary">
          Reset
        </Button>
      </div>
    </StyledAddRecepieForm>
  );
}
