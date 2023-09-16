import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./routes/user/UserRouter";
import HomeRouter from "./routes/home/HomeRouter";
import EmployerRouter from "./routes/employer/EmployerRouter";
import JobRouter from "./routes/jobs/JobRouter";
import AdminRouter from "./routes/admin/adminRouter";
function App() {
  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route path="/*" element={<HomeRouter />} />
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/employer/*" element={<EmployerRouter />} />
          <Route path="/job/*" element={<JobRouter />} />
          <Route path="/admin/*" element={<AdminRouter/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;