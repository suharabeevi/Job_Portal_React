import { Route, Routes } from "react-router-dom";
import AdminLoginForm from "../../Components/admin/Login/AdminLogin";
import { Admin } from "../../pages/admin/adminDash";
import AdminUser from "../../Components/admin/Body/pages/AdminUser";
import Dashboard from "../../Components/admin/Body/pages/DashBoard";
import AdminEmployer from "../../Components/admin/Body/pages/AdminEmployer";
import AdminEmployerVerification from "../../Components/admin/Body/pages/AdminEmployerVerification";
const AdminRouter = () => {
    return (
      <div>
        <Routes>
       <Route path="/login" element={<AdminLoginForm />} />
       <Route path="/" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<AdminUser />} />
        <Route path="/employers" element={<AdminEmployer />} />
        <Route path="/admin-verification" element={<AdminEmployerVerification />} />
      </Route>
</Routes>
      </div>
    );
  };
  export default AdminRouter