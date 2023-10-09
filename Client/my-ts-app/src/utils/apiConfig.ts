import configKeys from "./config";

const apiConfig = {
    //user
    userRegister : `${configKeys.API_URL}user-auth/register`,
    userLogin: `${configKeys.API_URL}user-auth/login`,
    googleSignIN: `${configKeys.API_URL}user-auth/sign-in-with-google`,
    userData: `${configKeys.API_URL}user/user-data`,
    updateUser:`${configKeys.API_URL}user/update-user`,
    uploadResume: `${configKeys.API_URL}user/update-resume`,
    deleteResume: `${configKeys.API_URL}user/delete-resume`,

   //employer
    employerRegister: `${configKeys.API_URL}employer-auth/register`,
    employerLogin: `${configKeys.API_URL}employer-auth/login`,
    emailVerify: `${configKeys.API_URL}employer-auth/email-verify`,
    OTPVerify: `${configKeys.API_URL}employer-auth/email-OTP`,
    employerData: `${configKeys.API_URL}employer/employer-data`,
    updateEmployer: `${configKeys.API_URL}employer/update-employer`,
    Employer_Verification_check:`${configKeys.API_URL}employer/isVerified`,

  
     //job
    employerJObs: `${configKeys.API_URL}job/employer-jobs`,
    createNewJob: `${configKeys.API_URL}job/create-job`,
    updateJob: `${configKeys.API_URL}job/update-job`,
    deleteJob: `${configKeys.API_URL}job/delete-job`,
    jobData: `${configKeys.API_URL}job/job-data`,
    allJobs: `${configKeys.API_URL}job/all-jobs`,
    filterJobs: `${configKeys.API_URL}job/filter-jobs`,
    titleLocationSalary: `${configKeys.API_URL}job/distinct`,


    applyJob: `${configKeys.API_URL}job-application/create-application`,
    isApplied: `${configKeys.API_URL}job-application/is-applied`,
    allApplication: `${configKeys.API_URL}job-application/all-applications`,
    applicationDetails: `${configKeys.API_URL}job-application/applicant-details`,
    changeStatus: `${configKeys.API_URL}job-application/change-status`,
    allUserApplications: `${configKeys.API_URL}job-application/user-applications`,


   //admin
   ADMIN_LOGIN:`${configKeys.API_URL}admin/login`,
   ADMIN_GET_ALL_USERS: `admin/get-all-users`,
   ADMIN_BLOCK_USER: `admin/block-user/`,
   ADMIN_GET_ALL_EMPLOYERS: `admin/get-all-employers`,
   ADMIN_BLOCK_EMPLOYER: `admin/block-employer/`,
   ADMIN_VERIFY_EMPLOYER: `admin/Employer-verification/`,
   ADMIN_GET_ALL_UNVERIFIED_EMPLOYERS: `admin/get-all-unverified-Employers`,
   ADMIN_GET_BASIC_DETAILS_USER_Employer_PACKAGE:`admin/get-basic-details-user-Employer`,
   ADMIN_GET_EMPLOYER_STATUS: `admin/get-all-Employer-status`,
   ADMIN_GET_BLOCKED_USER:`admin/get-all-Blocked-users`,


   getConversations: `${configKeys.API_URL}messenger-conversation`,
   getMessages: `${configKeys.API_URL}messenger-message`,
    
}
export default apiConfig;