import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postRequest } from "../../services/APIservices/AxiosServices";
import { ImageuploadRequest, LoginServiceRequestBody, SignUpServiceRequestBody } from "../../services/APIservices/pagesAPI/auth/auth.types";
import { loginService, imageUpload, SignUpasAdminService } from "../../services/APIservices/pagesAPI/auth/auth";
import {
  setBaseAuthValues,
  setTokenkeys,
} from "../../services/APIservices/API.tokenService";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { customToastError, customToastSuccess } from "../../utils/functions/customToast";

type LoginServiceResponse = {
    sys_id:string,
    email:string,
  username: string;
  password: string;
  role: string[];
  imageUrl: string;
};
type ImageuploadResponse=Partial<{ imageUrl: string }>
type SignUpServiceResponse={
    sys_id:string,
    email:string,
    username: string;
    password: string;
    role: string;
}
let initialState = {
  isLoadingSignin: false,
  isLoadingSignUp:false,
  isLoadingImageonServer: false,
  role: "",
  userImageURL: "",
  userID:"",
  email:""
};
// signin Query
export const signInQuery = createAsyncThunk<
  LoginServiceResponse,
  LoginServiceRequestBody,AsyncThunkConfig
>("signInQuery", async ({ username, password, role }) => {
  const fetch = await loginService({
    username,
    password,
    role,
  });
  return fetch.data;
});

// image upload

export const imageUploadQuery = createAsyncThunk<
ImageuploadResponse,
  ImageuploadRequest
>("imageUploadQuery", async ({ formData,tableSysId,fileName }) => {
  const fetch = await imageUpload({
    formData,tableSysId,fileName
  });
  return fetch.data;
});

// signup  Query

export const signUpQuery = createAsyncThunk<
SignUpServiceResponse,
  SignUpServiceRequestBody
>("signUpQuery", async ({ username, password, role,email }) => {
  const fetch = await SignUpasAdminService({
    username,
    password,
    role,
    email
  });
  return fetch.data;
});
const signInSlice = createSlice({
  name: "signInSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInQuery.pending, (state) => {
        state.isLoadingSignin = true;
      })
      .addCase(
        signInQuery.fulfilled,
        (state, action: PayloadAction<LoginServiceResponse>) => {
          const { username, password, role, imageUrl,  sys_id ,email} = action.payload;
          state.role = role[0];
          state.userID=  sys_id
          state.email=  email
          state.userImageURL = imageUrl;
          setBaseAuthValues(username, password);
          state.isLoadingSignin = false;

          customToastSuccess("Sign In complete")
        }
    
      )
      .addCase(signInQuery.rejected, (state) => {
        state.isLoadingSignin = false;
        customToastError("Failed logging in")
      })
      .addCase(imageUploadQuery.pending, (state) => {
        state.isLoadingImageonServer = true;
      })
      .addCase(
        imageUploadQuery.fulfilled,
        (state, action: PayloadAction<ImageuploadResponse>) => {
          const { imageUrl } = action.payload;
         
          state.userImageURL = imageUrl||"";
       
          state.isLoadingSignin = false;
        }
      )
      .addCase(imageUploadQuery.rejected, (state) => {
        state.isLoadingImageonServer = false;
      })
      .addCase(signUpQuery.pending, (state) => {
        state.isLoadingSignUp = true;
      })
      .addCase(
        signUpQuery.fulfilled,
        (state, action: PayloadAction<SignUpServiceResponse>) => {
          const {username, password, role,sys_id,email } = action.payload;
          state.userID=  sys_id
          state.email=  email
          state.role = role;
          setBaseAuthValues(username, password);
          state.isLoadingSignin = false;
          customToastSuccess("Sign up complete")
        }
      )
      .addCase(signUpQuery.rejected, (state) => {
        state.isLoadingSignUp = false;
        customToastError("Failed Signing up")
      });
  },
});

export const signinSliceReducer = signInSlice.reducer;
