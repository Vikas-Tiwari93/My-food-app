import * as yup from "yup";


export const addRecepieSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  file: yup.mixed(),
  detailedType:yup.string().required("Type detail is required"),
  type:yup.boolean().required("type is required"),
  shortDescription: yup
    .string()
    .required("Email is required")
    .matches(/\S+@\S+\.\S+/, "Invalid email address"),
 
});
