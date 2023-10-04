import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginPayload } from "../../../types/PayloadInterface";
import { userLoginValidationSchema } from "../../../utils/validation";
import { userLogin } from "../../../features/axios/api/User/userAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../../features/axios/redux/slices/user/tokenSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "../../../features/axios/redux/reducers/Reducer";
import { loginSuccess } from "../../../features/axios/redux/slices/user/userLoginAuthSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import GoogleAuthComponent from "./GoogleAuthComponent";


export default function UserLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state:RootState) => state.userAuth.isLoggedIn);
    const token = localStorage.getItem('token');
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginPayload>({
      resolver: yupResolver(userLoginValidationSchema),
    });
  
    const notify = (msg: string, type: string) =>
      type === "error"
        ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
        : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
  
   
    const submitHandler = async (formData: LoginPayload) => {
      userLogin(formData)
        .then((response) => {
          const token = response.token;
          dispatch(setToken(token));
          dispatch(loginSuccess());
  
          notify("Login success", "success");
          setTimeout(() => {
            navigate('/user/home');
          }, 2000);
        })
        .catch((error: any) => {
          notify(error.message, "error");
        });
    };
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    useEffect(()=>{
      if(token) {
        dispatch(loginSuccess());
      }
      if(isLoggedIn) {
        navigate('/user/home');
      }
    },[isLoggedIn, navigate]);
    // useEffect(() => {
    //   // Check if the user is already logged in
    //   if (isLoggedIn) {
    //     // Redirect the user to the home page
    //     navigate("/user/home");
    //   }
    // }, [isLoggedIn, navigate]);
    return (
      <div className="flex justify-end h-screen bg-slate-100">
        <div className="ml-32 w-[40%] flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dpgbodkae/image/upload/v1695018661/computer-login-animate_1_kg6oxn.svg"
            alt="Img"
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center w-1/2 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="w-96 p-6 bg-white border border-gray-300 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
              <div>
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="text  "
                  placeholder="Email"
                  {...register("email")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
              <label className="text-sm" htmlFor="password">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brown-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 mr-2 flex items-center justify-center h-full"
        >
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
          />
        </button>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm">
          {errors.password.message}
        </p>
      )}
              </div>
              <button
                type="submit"
                className="w-24 py-2 text-sm bg-brown-600 text-white rounded hover:bg-brown-700 flex justify-center items-center mx-auto"
              >
                Login
              </button>
            </form>
            <span className="mr-2 flex justify-center">or</span>
            <div className="flex items-center justify-center mt-2">
               {/* <GoogleAuthComponent/> */}
            </div>
  
            <div className="mt-4 text-center">
              <Link to={"/user/register"}>
                <span className="text-gray-500">
                  Don't have an account?{" "}
                  <p className="text-brown-600 underline">Sign up</p>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />    
      </div>
    );
  }
