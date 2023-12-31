import * as yup from "yup";

export const userRegisterValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/, "Enter a valid name"),
    email: yup.string().required("Email is required").email("Invalid email"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match"),
  });
  export const userLoginValidationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  export const employerRegisterValidationSchema = yup.object().shape({
    companyName: yup
      .string()
      .required("Name is required")
      .matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/, "Enter a valid name"),
    email: yup.string().required("Email is required").email("Invalid email"),
    industry: yup.string().required("Industry is required")
    .matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/, "Enter a valid name"),
    location: yup.string().required("Location is required")
    .matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/, "Enter a valid name"),
    idProof_img: yup.mixed()
  .required('Image is required') // Check if the field is required
  .test('fileType', 'Only JPEG and PNG images are allowed', (value: any) => {
    if (!value) return true; // Skip validation if no file is selected
    return (
      value && (value.type === 'image/jpeg' || value.type === 'image/png')
    );
  })
  .test('fileSize', 'Image size exceeds the maximum allowed (5MB)', (value: any) => {
    if (!value) return true; // Skip validation if no file is selected
    return value && value.size <= 5 * 1024 * 1024; // 5MB
  }),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match"),
  });
  export const jobCreationValidationSchema = yup.object().shape({
    title: yup.string()
    .required("job title is requied is required")
    .matches(/^[A-Za-z]/, "Job title must start with a letter"),
    description: yup.string().required("Job Description is required"),
    
    location: yup.string().required("Location is required")
    .matches(/^[A-Za-z]/, " description must start with a letter"),
    employmentType: yup.string().required("Employment Type is required"),
    requirements: yup
      .mixed()
      .test(
        "isArrayOrString",
        "Requirements must be an array or a string",
        function (value) {
          const { createError, path } = this;
          if (Array.isArray(value) || typeof value === "string") {
            return true;
          }
          return createError({
            path,
            message: "Requirements must be an array or a string",
          });
        }
      )
      .required("At least one requirement is required"),
    responsibilities: yup
      .mixed()
      .test(
        "isArrayOrString",
        "Responsibilities must be an array or a string",
        function (value) {
          const { createError, path } = this;
          if (Array.isArray(value) || typeof value === "string") {
            return true;
          }
          return createError({
            path,
            message: "Responsibilities must be an array or a string",
          });
        }
      )
      .required("At least one responsibility is required"),
    salary: yup
      .number()
      .required("Salary is required")
      .positive("Salary must be a positive number"),
    openings: yup
      .number()
      .required("Openings is required")
      .integer("Openings must be an integer")
      .positive("Openings must be a positive number"),
  });
  export const jobUpdateValidationSchema = yup.object().shape({
    title: yup.string().required("Job Title is required"),
    description: yup.string().required("Job Description is required"),
    location: yup.string().required("Location is required"),
    employmentType: yup.string().required("Employment Type is required"),
    requirements: yup
      .mixed()
      .test(
        "isArrayOrString",
        "Requirements must be an array or a string",
        function (value) {
          const { createError, path } = this;
          if (Array.isArray(value) || typeof value === "string") {
            return true;
          }
          return createError({
            path,
            message: "Requirements must be an array or a string",
          });
        }
      )
      .required("At least one requirement is required"),
    responsibilities: yup
      .mixed()
      .test(
        "isArrayOrString",
        "Responsibilities must be an array or a string",
        function (value) {
          const { createError, path } = this;
          if (Array.isArray(value) || typeof value === "string") {
            return true;
          }
          return createError({
            path,
            message: "Responsibilities must be an array or a string",
          });
        }
      )
      .required("At least one responsibility is required"),
    salary: yup
      .number()
      .required("Salary is required")
      .positive("Salary must be a positive number"),
    openings: yup
      .number()
      .required("Openings is required")
      .integer("Openings must be an integer")
      .positive("Openings must be a positive number"),
  });
  