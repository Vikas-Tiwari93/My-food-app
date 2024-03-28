import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../../utils/yupSchema/authSchema";

import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { signInQuery } from "../../../redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "../../../App";

const SignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px 4px silver;
  height: 400px;
  width: 100%;

  .signup-form {
    width: 400px;
    padding: 10px;
  }
  .roles-selector {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.signinSlice.email);
console.log(email)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signInSchema),
  });
  type FormData = {
    role: string;
    name: string;
    password: string;

  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    dispatch(
      signInQuery({
        role: data.role,
        username: data.name,
        password: data.password,
      })
    );
    navigate("/");
  };
  return (
    <SignInPage>
      <h2 style={{ marginBottom: "20px" }}> Sign In</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message as ReactNode}
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
          <div className="roles-selector">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select"
                defaultValue=""
                {...register("role")}
                label="Select role"
                error={!!errors.role}
              >
                <MenuItem value="user">General user</MenuItem>
                <MenuItem value="chef">Chef</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div id="buttons-root">
            <Button type="submit" variant="contained" color="primary">
              Sign in
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
    </SignInPage>
  );
}
