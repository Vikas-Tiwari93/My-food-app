import axios, { AxiosRequestHeaders } from "axios";
import {
  getAuthTokenkey,
  getRefreshTokenkey,
  getUsenameAndPasswordBase64,
  removeTokenKeys,
  setAuthTokenkey,
} from "./API.tokenService";
import { toast } from "react-toastify";
type APIoptions = {
  isJson?: boolean;
  isAuth?: boolean;
  contentType?: string;
  cookie?: string;
  formData?: boolean;
  basicAuth?: boolean;
};
const baseUrl = "";

export const APIClient = axios.create({
  baseURL: baseUrl || "",
  transformRequest: [],
  transformResponse: [],
});

const expireSession = (err: unknown) => {
  if (err) {
    toast.error("Session expired login in needed");
    removeTokenKeys();
    window.location.replace(`${baseUrl}/auth/signin`);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apiCallsWithExpiredTokens = (err: any) => {
  if (err.response.data.details === "Expired or Invalid token") {
    const refreshToken = getRefreshTokenkey();
    if (!refreshToken) {
      window.location.replace(`${baseUrl}/auth/signin`);
      throw err.response.data.details;
    }
    const requestedPromise = axios
      .post(`${baseUrl}/auth/refresh`, { refreshToken })
      .then((data) => {
        const { authToken } = data.data;
        return setAuthTokenkey(authToken);
      })
      .catch(expireSession);
    return (
      requestedPromise
        .then(() => {
          const authToken = getAuthTokenkey();
          err.config.headers.Authorization = `Bearer ${authToken}`;
          return axios(err.config);
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
          throw error;
        })
    );
  }
  throw err;
};

APIClient.interceptors.response.use(undefined, apiCallsWithExpiredTokens);
// Axios instance end
// all method types from here
export const getRequest = async (url: string, options?: APIoptions) => {
  const headers = {} as AxiosRequestHeaders;
  if (options?.isAuth) {
    headers.Authorization = getAuthTokenkey();
  }
  if (options?.basicAuth) {
    headers.Authorization = getUsenameAndPasswordBase64();
  }
  if (options?.contentType) {
    headers["Content-Type"] = options.contentType;
  }
  if (options?.cookie) {
    headers["Cookie"] = options.cookie;
  }

  return APIClient.get(url, { headers });
};

export const postRequest = async <T>(
  url: string,
  data: T,
  options?: APIoptions
) => {
  const headers = {} as AxiosRequestHeaders;
  if (options?.isAuth) {
    headers.Authorization = getAuthTokenkey();
  }
  if (options?.basicAuth) {
    headers.Authorization = getUsenameAndPasswordBase64();
  }

  if (options?.isJson) {
    headers["Content-Type"] = "application/json";
  }

  if (options?.formData) {
    headers["Content-Type"] = "multipart/form-data";
  }
  if (options?.cookie) {
    headers["Cookie"] = options.cookie;
  }

  return APIClient.post(url, data, { headers });
};

export const putRequest = async <T>(
  url: string,
  data: T,
  options?: APIoptions
) => {
  const headers = {} as AxiosRequestHeaders;

  if (options?.isAuth) {
    headers.Authorization = getAuthTokenkey();
  }
  if (options?.basicAuth) {
    headers.Authorization = getUsenameAndPasswordBase64();
  }
  if (options?.contentType) {
    headers["Content-Type"] = options.contentType;
  }
  if (options?.formData) {
    headers["Content-Type"] = "multipart/form-data";
  }
  if (options?.cookie) {
    headers["Cookie"] = options.cookie;
  }
  if (options?.cookie) {
    headers["Cookie"] = options.cookie;
  }

  return APIClient.put(url, data, { headers });
};
export const patchRequest = async <T>(
  url: string,
  data: T,
  options?: APIoptions
) => {
  const headers = {} as AxiosRequestHeaders;
  if (options?.isAuth) {
    headers.Authorization = getAuthTokenkey();
  }

  return APIClient.patch(url, data, { headers });
};

export const deleteRequest = async (url: string, options?: APIoptions) => {
  const headers = {} as AxiosRequestHeaders;
  if (options?.isAuth) {
    headers.Authorization = getAuthTokenkey();
  }
  if (options?.basicAuth) {
    headers.Authorization = getUsenameAndPasswordBase64();
  }

  return APIClient.delete(url, {
    headers,
  });
};
