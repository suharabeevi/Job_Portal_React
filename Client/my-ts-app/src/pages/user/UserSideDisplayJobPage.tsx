import React from "react";
import UserHeader from "../../Components/Header/UserHeader";
import DisplayJobs from "../../Components/User/Jobs/DisplayJobs";
import UserSideFooter from "../../Components/Footer/UserSideFooter";
function DisplayJobPage() {
  return (
    <>
      <UserHeader />
      <DisplayJobs />
      <UserSideFooter />
    </>
  );
}

export default DisplayJobPage;