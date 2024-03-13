import * as yup from "yup";


export const addRecepieSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  file: yup.mixed(),
  veg:yup.boolean().required("type is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/\S+@\S+\.\S+/, "Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
