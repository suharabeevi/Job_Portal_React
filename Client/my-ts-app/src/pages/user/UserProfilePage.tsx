import UserHeader from "../../Components/Header/UserHeader";
import UserSideFooter from "../../Components/Footer/UserSideFooter";
import UserProfile from "../../Components/User/UserProfile/UserProfile";

const UserProfilePage = () => {
    return (
      <>
        <UserHeader />
        <UserProfile />
        <UserSideFooter />
      </>
    );
  };
  
  export default UserProfilePage;