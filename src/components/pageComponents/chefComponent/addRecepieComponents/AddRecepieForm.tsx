import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, TextField } from '@mui/material';

import React, { ReactNode, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { addRecepieSchema } from '../../../../utils/yupSchema/recepieSchema';
import styled from '@emotion/styled';
const StyledAddRecepieForm= styled.form`
.upload-recepie-picture{
    width:120px;
    height:120px;
}
.recepie-uploader{
    display:absolute;
  
    top:-100px;
    left:-100px;
}
.recepie-uploader div,p{
    border:none;
}
.css-xb7zvf-MuiInputBase-root-MuiInput-root::before {border:none}
.css-xb7zvf-MuiInputBase-root-MuiInput-root::after {border:none;}
.css-xb7zvf-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {border:none;}
.recepie-uploader:hover{
    cursor:pointer;
}
.recepie-uploader input{
    border:none;
    height:100px;
    opacity:0;
}

`
export default function AddRecepieForm() {

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
  
    type FormData = {
      name: string;
      email: string;
      password: string;
      file?: File;
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
        <div className=''></div>
    <div style={{ position: "relative" }}>
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
      label="Name"
      fullWidth
      variant="outlined"
      {...register("name")}
      error={!!errors.name}
      helperText={errors.name?.message as ReactNode}
    />

    <TextField
      label="Email"
      fullWidth
      variant="outlined"
      {...register("email")}
      error={!!errors.email}
      helperText={errors.email?.message as ReactNode}
    />

    <TextField
      type="password"
      label="Password"
      fullWidth
      variant="outlined"
      {...register("password")}
      error={!!errors.password}
      helperText={errors.password?.message as ReactNode}
    />
    <div id="buttons-root">
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
      <Button onClick={() => reset()} variant="contained" color="primary">
        Reset
      </Button>
    </div>
  </StyledAddRecepieForm>
  )
}
