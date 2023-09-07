import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./routes/user/UserRouter";
import HomeRouter from "./routes/home/HomeRouter";
import EmployerRouter from "./routes/employer/EmployerRouter";
import JobRouter from "./routes/jobs/JobRouter";
function App() {
  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route path="/*" element={<HomeRouter />} />
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/employer/*" element={<EmployerRouter />} />
          <Route path="/job/*" element={<JobRouter />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;