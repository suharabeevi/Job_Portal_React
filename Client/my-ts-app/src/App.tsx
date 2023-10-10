// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import UserRouter from "./routes/user/UserRouter";
// import HomeRouter from "./routes/home/HomeRouter";
// import EmployerRouter from "./routes/employer/EmployerRouter";
// import JobRouter from "./routes/jobs/JobRouter";
// import NotFound from "./Components/Error/NotFound";
// import AdminRouter from "./routes/admin/adminRouter";
// import MessengerRouter from "./routes/messenger/MessengerRouter";
// import ApplicationRouter from "./routes/applications/applicationRouter";
// function App() {
//   return (
//     <div className="font-roboto">
//       <Router>
//         <Routes>
//           <Route path="/*" element={<HomeRouter />} />
//           <Route path="/user/*" element={<UserRouter />} />
//           <Route path="/employer/*" element={<EmployerRouter />} />
//           <Route path="/job/*" element={<JobRouter />} />
//           <Route path="/application/*" element={<ApplicationRouter />} />
//           <Route path="/admin/*" element={<AdminRouter/>}/>
//           <Route path="/messenger/*" element={<MessengerRouter />} />
//           <Route path="/*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;
import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./Components/Error/NotFound";
const HomeRouter = lazy(() => import("./routes/home/HomeRouter"));
const UserRouter = lazy(() => import("./routes/user/UserRouter"));
const EmployerRouter = lazy(() => import("./routes/employer/EmployerRouter"));
const JobRouter = lazy(() => import("./routes/jobs/JobRouter"));
const ApplicationRouter = lazy(() => import("./routes/applications/applicationRouter"));
const AdminRouter = lazy(() => import("./routes/admin/adminRouter"));
const MessengerRouter = lazy(() => import("./routes/messenger/MessengerRouter"));
function App() {
  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route path="/*" element={<Suspense fallback={<div>Loading...</div>}> <HomeRouter /> </Suspense>} />
          <Route path="/user/*" element={<Suspense fallback={<div>Loading...</div>}> <UserRouter /> </Suspense>} />
          <Route path="/employer/*" element={<Suspense fallback={<div>Loading...</div>}> <EmployerRouter /> </Suspense>} />
          <Route path="/job/*" element={<Suspense fallback={<div>Loading...</div>}> <JobRouter /> </Suspense>} />
          <Route path="/application/*" element={<Suspense fallback={<div>Loading...</div>}> <ApplicationRouter /> </Suspense>} />
          <Route path="/admin/*" element={<Suspense fallback={<div>Loading...</div>}> <AdminRouter /> </Suspense>} />
          <Route path="/messenger/*" element={<Suspense fallback={<div>Loading...</div>}> <MessengerRouter /> </Suspense>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
