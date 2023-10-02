import UserSideFooter from "../../Components/Footer/UserSideFooter";
import UserHeader from "../../Components/Header/UserHeader";
// import DisplayApplications from "../../components/User/Applications/DisplayApplications"
import DisplayApplications from "../../Components/User/Applications/DisplayApplications";

function UserJobApplicationsPage() {
  return (
    <div>
      <UserHeader/>
      <DisplayApplications/>
      <UserSideFooter/>
    </div>
  )
}

export default UserJobApplicationsPage;