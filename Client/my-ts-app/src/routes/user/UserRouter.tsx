import { Route, Routes } from "react-router-dom";
import UserSignupPage from "../../pages/user/UserSignupPage";
import UserHomePage from "../../pages/user/UserHomePage"; 
const UserRouter = () => {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<UserHomePage />} />
          <Route path="/register" element={<UserSignupPage />} />
          {/* <Route path="/profile" element={<UserProfilePage/>} />
          <Route path="/edit-profile" element={<EditUserProfilePage/>}/> 
          <Route path="/all-applications" element= {<UserJobApplicationsPage/>} /> */}
        </Routes>
      </div>
    );
  };
  
  export default UserRouter;