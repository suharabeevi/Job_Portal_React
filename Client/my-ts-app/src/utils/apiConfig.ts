import configKeys from "./config";

const apiConfig = {
    //user
    userRegister : `${configKeys.API_URL}user-auth/register`,
    userLogin: `${configKeys.API_URL}user-auth/login`,
    googleSignIN: `${configKeys.API_URL}user-auth/sign-in-with-google`,
    userData: `${configKeys.API_URL}user/user-data`,
    uploadResume: `${configKeys.API_URL}user/update-resume`,

   //employer
    employerRegister: `${configKeys.API_URL}employer-auth/register`,
    employerLogin: `${configKeys.API_URL}employer-auth/login`,
    emailVerify: `${configKeys.API_URL}employer-auth/email-verify`,
    OTPVerify: `${configKeys.API_URL}employer-auth/email-OTP`,
     employerData: `${configKeys.API_URL}employer/employer-data`,
  
     //job
    employerJObs: `${configKeys.API_URL}job/employer-jobs`,
    createNewJob: `${configKeys.API_URL}job/create-job`,
    updateJob: `${configKeys.API_URL}job/update-job`,
    deleteJob: `${configKeys.API_URL}job/delete-job`,
    jobData: `${configKeys.API_URL}job/job-data`,
    allJobs: `${configKeys.API_URL}job/all-jobs`,

   //admin
   ADMIN_LOGIN:`${configKeys.API_URL}admin/login`,
   ADMIN_GET_ALL_USERS: `admin/get-all-users`,
   ADMIN_BLOCK_USER: `admin/block-user/`,
   ADMIN_GET_ALL_EMPLOYERS: `admin/get-all-employers`,
   ADMIN_BLOCK_EMPLOYER: `admin/block-employer/`,
   ADMIN_VERIFY_EMPLOYER: `admin/Employer-verification/`,
}
export default apiConfig;