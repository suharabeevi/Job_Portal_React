import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { employerRegisterValidationSchema } from "../../../utils/validation";
import { registerEmployer } from "../../../features/axios/api/employer/employerAuthentication";
import { EmployerRegisterPayload } from "../../../types/PayloadInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/axios/redux/reducers/Reducer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { any } from "prop-types";

function EmployerRegister() {
  const navigate = useNavigate();
  const employerEmail = useSelector(
    (state: RootState) => state.employerDetails.employerEmail
  );
  // to remove after using formik
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<EmployerRegisterPayload>({
  //   resolver: yupResolver(employerRegisterValidationSchema as any),
  // });
  const formik = useFormik<EmployerRegisterPayload>({
    initialValues: {
      companyName: "",
      industry: "",
      location: "",
      idProof_img: null,
      password: "",
      confirmPassword: "",
      image: "",
      about: "",
      isVerified: false,
      email: "",
    },
    validationSchema: employerRegisterValidationSchema,
    onSubmit: (values) => {
      console.log("in formik", values);
      registerEmployer({...values})
          .then((response) => {
            notify("Registration success", "success");
            setTimeout(() => {
              navigate("/employer/login");
            }, 2000);
          })
          .catch((error: any) => {
            notify(error.message, "error");
          });
    },
  });

  React.useEffect(() =>{
    formik.setFieldValue("email", employerEmail);
  }, []);


  const notify = (msg: string, type: string) => {
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
      : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://res.cloudinary.com/dpgbodkae/image/upload/v1695012129/found_it-logos_black_wgrai8.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name
              </label>
              <div className="mt-2">
                <input
                  id="companyName"
                  type="text"
                  placeholder="Company Name"
                  {...formik.getFieldProps("companyName")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
                />
                {formik.errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.companyName}
                  </p>
                )}
              </div>
            </div>
  
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Industry
              </label>
              <div className="mt-2">
                <input
                  id="industry"
                  type="text"
                  placeholder="Industry Name"
                  {...formik.getFieldProps("industry")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
                />
                {formik.errors.industry && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.industry}
                  </p>
                )}
              </div>
            </div>
  
            <div>
              <label
                htmlFor="idProof_img"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ID Proof
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  id="idProof_img"
                  onChange={(event) => {
                    const selectedFile = event.currentTarget.files?.[0];
                    if (selectedFile) {
                      formik.setFieldValue("idProof_img", selectedFile);
                    }
                  }}
                  placeholder="Please select ID proof"
                />
                {formik.errors.idProof_img && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.idProof_img}
                  </p>
                )}
              </div>
            </div>
  
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  type="text"
                  placeholder="Location"
                  {...formik.getFieldProps("location")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
                />
                {formik.errors.location && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.location}
                  </p>
                )}
              </div>
            </div>
  
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
                />
                {formik.errors.password && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </div>
  
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  {...formik.getFieldProps("confirmPassword")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
                />
                {formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-brown-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-600"
              >
                Sign Up
              </button>
            </div>
          </form>
  
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/employer/login" className="font-semibold leading-6 text-brown-600 hover:text-brown-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default EmployerRegister;
