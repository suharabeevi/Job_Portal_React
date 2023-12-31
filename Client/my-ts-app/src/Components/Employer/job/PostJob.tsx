import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { jobCreationValidationSchema } from "../../../utils/validation";
import { JobCreationPayload } from "../../../types/PayloadInterface";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import createNewJob from "../../../features/axios/api/employer/createJob";
import { useState,useEffect } from "react";
import { EmployerVerificationCheck } from "../../../features/axios/api/employer/EmployerVerificationcheck";
function PostJob() {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<JobCreationPayload>({
      resolver: yupResolver(jobCreationValidationSchema as any),
    });
    const notify = (msg: string, type: string) => {
      type === "error"
        ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
        : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
    };
    
    const [isVerified, setIsVerified] = useState<boolean | null >(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
      const checkVerified = async()=>{
      const result = await EmployerVerificationCheck()
      console.log(result,"result");
      
      if(result?.result){ 
        setIsVerified(true)
      }else{
        setIsVerified(false)
      }
      }
    checkVerified()
    },[])
  
console.log(isVerified,"yessssssssssss");

    const submitHandler = async (formData: JobCreationPayload) => {
      setIsLoading(true);
      createNewJob(formData)
        .then((response) => {
          notify("Job created successfully", "success");
          setTimeout(() => {
            setIsLoading(false);  
            navigate("/employer/all-jobs");
          }, 2000);
        })
        .catch((error: any) => {
          notify(error.message, "error");
        });
    };
  
    return (
      <>
        <div className="pl-40 pt-2">
          <Breadcrumbs className="bg-foundItBg">
            <a href="#" className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
            <a href="#" className="opacity-60">
              <span>Jobs</span>
            </a>
            <a href="#">Create new job</a>
          </Breadcrumbs>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Create New Job</h1>
          <div className="rounded border bg-white border-gray-300 p-4">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-4 flex justify-between">
                <div className="w-1/2 mr-4">
                  <label
                    htmlFor="title"
                    className="block text-sm mb-1 font-medium"
                  >
                    Job Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                    
                    placeholder="Job Title"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                  )}
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    htmlFor="employmentType"
                    className="block text-sm mb-1 font-medium"
                  >
                    Employment Type:
                  </label>
                  <select
                    id="employmentType"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                    
                    placeholder="Employment Type"
                    {...register("employmentType")}
                  >
                    {errors.employmentType && (
                      <p className="text-red-500 text-sm">
                        {errors.employmentType.message}
                      </p>
                    )}
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm mb-1 font-medium"
                >
                  Job Description:
                </label>
                <textarea
                  id="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                 
                  placeholder="Job Description"
                  {...register("description")}
                >
                  {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description.message}</p>
                  )}

                </textarea>
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm mb-1 font-medium"
                >
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                 
                  placeholder="Location"
                  {...register("location")}
                />
                {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location.message}</p>
                  )}
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="requirements"
                  className="block text-sm mb-1 font-medium"
                >
                  Requirements:
                </label>
                <textarea
                  id="requirements"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                required
                  placeholder="Requirements"
                  {...register("requirements")}
                />
                {errors.requirements && (
                  <p className="text-red-500 text-sm">
                    {errors.requirements.message}
                  </p>
                )}
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="responsibilities"
                  className="block text-sm mb-1 font-medium"
                >
                  Responsibilities:
                </label>
                <textarea
                  id="responsibilities"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                 
                  placeholder="Responsibilities"
                  {...register("responsibilities")}
                ></textarea>
              </div>
  
              <div className="mb-4 flex justify-between">
                <div>
                  <label
                    htmlFor="salary"
                    className="block text-sm mb-1 font-medium"
                  >
                    Salary:
                  </label>
                  <input
                    type="number"
                    id="salary"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                 
                    placeholder="salary"
                    {...register("salary")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="openings"
                    className="block text-sm mb-1 font-medium"
                  >
                    Openings:
                  </label>
                  <input
                    type="number"
                    id="openings"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-600"
                   
                    placeholder="Openings"
                    {...register("openings")}
                  />
                </div>
              </div>
  
              <button
                type="submit"
                className="px-4 py-2 font-medium text-white bg-brown-600 rounded hover:bg-brown-500 focus:outline-none"
              >
                 {isLoading ? "Submitting" : "submit"}
              </button>
            </form>
            
          </div>
          <ToastContainer />
        </div>
      </>
    );
  }
  
  export default PostJob;