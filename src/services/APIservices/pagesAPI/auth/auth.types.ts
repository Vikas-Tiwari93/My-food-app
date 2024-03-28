

export type LoginServiceRequestBody = {
  username: string;
  password: string;
  role: string;
};
export type ImageuploadRequest = {

  tableSysId: string;
  fileName: string;
  formData: File;
};
export type SignUpServiceRequestBody = {
  email: string;
  username: string;
  password: string;
  role: string;
};
