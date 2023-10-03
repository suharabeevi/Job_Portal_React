
import AdminDashBoard from "../../Components/admin/Layout/AdminLayout";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const isAdminAuthenticated = () => {
  // Check if the admin token exists in localStorage or your authentication mechanism
  const adminToken = localStorage.getItem("adminToken");
  return !!adminToken; // Convert to boolean
};
export default function Admin() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check admin authentication when the component mounts
    const isAuthenticated = isAdminAuthenticated();
    setIsAdmin(isAuthenticated);

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, []);
   
  return isAdmin ? (
    <>
      {/* Render your admin dashboard components here */}
      <AdminDashBoard />
    </>
  ) : null;
  }