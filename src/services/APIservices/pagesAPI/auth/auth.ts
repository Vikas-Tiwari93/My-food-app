import { postRequest } from "../../AxiosServices";
import {
  ImageuploadRequest,
  LoginServiceRequestBody,
  SignUpServiceRequestBody,
} from "./auth.types";

export const loginService = async ({
  username,
  password,
  role,
}: LoginServiceRequestBody) => {
  const LOGIN_END_POINT = `/api/x_1321848_food_r_0/sign_in`;
  const reqBody = { username, password, role };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    basicAuth: false,
    isJson: true,
  });
};

export const imageUpload = async ({ formData,tableSysId,fileName }: ImageuploadRequest) => {
  const LOGIN_END_POINT = `api/now/attachment/upload`;
  const queryParams = new URLSearchParams({
    table_name:"sys_attachment",
    table_sys_id:tableSysId,
    file_name:fileName,
  });

  const urlWithParams = `${LOGIN_END_POINT}?${queryParams.toString()}`;
  const reqBody = formData;
  return postRequest(urlWithParams, JSON.stringify(reqBody), {
    basicAuth: true,
    formData:true
  });
};

export const SignUpasAdminService = ({
  email,
  username,
  password,
  role,
}: SignUpServiceRequestBody) => {
  const LOGIN_END_POINT = "/api/x_1321848_food_r_0/sign_up";

  const reqBody = {
    email,
    username,
    password,
    role,
  };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    basicAuth: false,
    isJson: true,
  });
};
