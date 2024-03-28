import styled from "@emotion/styled";
import { Button, TextField, Input } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema, signUpSchema } from "../../../utils/yupSchema/authSchema";

const SignupPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px 4px silver;
  height: 600px;
  width: 100%;

  .signup-form {
    width: 400px;
    padding: 10px;
  }
  .signup-form form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  #buttons-root {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .upload-picture {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid silver;
    padding: 10px;
    background: white;
  }

  .uploader {
    width: 0px;
  }
  .css-xb7zvf-MuiInputBase-root-MuiInput-root::before {
    visibility: hidden;
    border-bottom: none;
  }
  .css-xb7zvf-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    visibility: hidden;
    border-bottom: none;
  }
  .uploader input {
    position: absolute;
    top: -100px;
    left: -100px;
    color: transparent;
    background: transparent;
    opacity: 0;
    z-index: 100;
    width: 90px;
    height: 90px;
  }
  .uploader input:hover {
    cursor: pointer;
  }
  .seperator {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
    border: 0.5px solid transparent;
  }
  .sepearotor-text {
    font-size: 13px;
    font-weight: 600;
    color: silver;
  }
  .sepearotor-text:hover {
    cursor: pointer;
    color: grey;
  }
`;
export default function Signup() {
  const [uploadPicture, setUploadPicture] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    // Update imagePreview when uploadPicture changes
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
    resolver: yupResolver(signUpSchema),
  });

  type FormData = {
    name: string;
    email: string;
    password: string;
    file?: File;
    role:string;
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setUploadPicture(file || null);
  };
  return (
    <SignupPage>
      <h2 style={{ marginBottom: "20px" }}> Sign Up</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <img
              src={
                uploadPicture
                  ? (imagePreview as string)
                  : "/images/200219-A-QY194-002.avif"
              }
              alt=""
              className="upload-picture"
            />
            <Input
              className="uploader"
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
        </form>
        <div className="seperator"></div>
        <div className="sepearotor-text">
          Any issues ? Please reach out to us.
        </div>
      </div>
    </SignupPage>
  );
}
