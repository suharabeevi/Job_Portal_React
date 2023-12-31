import { Route, Routes } from "react-router-dom";
import UserSignupPage from "../../pages/user/UserSignupPage";
import UserHomePage from "../../pages/user/UserHomePage"; 
import UserLoginPage from "../../pages/user/UserLoginPage";
import UserProfilePage from "../../pages/user/UserProfilePage";
import EditUserProfilePage from "../../pages/user/EditUserProfilePage";
import UserJobApplicationsPage from "../../pages/user/UserJobApplications";
import EmailVerificationComponent from "../../Components/User/forgotpassword/emailVerification";
import OTPVerificationComponent from "../../Components/User/forgotpassword/otpVerifcation";
import ChangePasswordComponent from "../../Components/User/forgotpassword/changePassword";
const UserRouter = () => {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<UserHomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<UserSignupPage />} />
          <Route path="/profile" element={<UserProfilePage/>} />
          <Route path="/edit-profile" element={<EditUserProfilePage/>}/>
          <Route path="/all-applications" element= {<UserJobApplicationsPage/>} />
          <Route path="/forgot-password" element= {<EmailVerificationComponent/>} />
          <Route path="/otp-verification/:email" element= {<OTPVerificationComponent/>} />
          <Route path="/change-password-with-email/:email" element= {<ChangePasswordComponent/>} />
        </Routes>
      </div>
    );
  };
  export default UserRouter;