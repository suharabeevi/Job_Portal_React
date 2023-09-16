
import AdminDashBoard from "../Layout/AdminLayout";
import { Outlet } from "react-router-dom";
export function Admin() {
    return (
      <>
        <AdminDashBoard />
        <Outlet />
      </>
    );
  }
  
  export default Admin