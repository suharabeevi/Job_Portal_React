import EmployerHeader from "../../Components/Header/EmployerHeader";
import EditJob from "../../Components/Employer/job/EditJob";
import React from "react";

function EditJobPage() {
  return (
    <div className="bg-foundItBg">
      <EmployerHeader />
      <EditJob />
    </div>
  );
}

export default EditJobPage;