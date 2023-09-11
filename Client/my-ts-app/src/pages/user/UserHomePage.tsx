import React from "react";
import UserHome from "../../Components/HomePage/UserHome";
import UserSideFooter from "../../Components/Footer/UserSideFooter";
import UserHeader from "../../Components/Header/UserHeader";
function UserHomePage() {
    return (
      <div>
        <UserHeader />
        <UserHome />
        <UserSideFooter/>
      </div>
    );
  }
  export default UserHomePage;