import configKeys from "./config";

const apiConfig = {
    userRegister : `${configKeys.API_URL}user-auth/register`,
    userLogin: `${configKeys.API_URL}user-auth/login`,
    googleSignIN: `${configKeys.API_URL}user-auth/sign-in-with-google`,
    userData: `${configKeys.API_URL}user/user-data`,

    employerRegister: `${configKeys.API_URL}employer-auth/register`,
    employerLogin: `${configKeys.API_URL}employer-auth/login`,
    emailVerify: `${configKeys.API_URL}employer-auth/email-verify`,
    OTPVerify: `${configKeys.API_URL}employer-auth/email-OTP`,
    // employerData: `${configKeys.API_URL}employer/employer-data`,
    // updateEmployer: `${configKeys.API_URL}employer/update-employer`,


}
export default apiConfig;