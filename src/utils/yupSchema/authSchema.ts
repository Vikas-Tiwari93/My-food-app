import * as yup from "yup";

export const signInSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
 

  role:yup.string().required("role required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
export const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  file: yup.mixed(),
  role:yup.string().required("role required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/\S+@\S+\.\S+/, "Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});


export const test = yup.object().shape({
  name: yup.string().required("Name is required")})