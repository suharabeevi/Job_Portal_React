import React from "react";
import EmployerTable from "../Tables/employerTable";
import PageTitle from "../../../Common/Headings";

const AdminEmployer: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4  mt-14">
        <PageTitle title="Employers Details"/>
        <EmployerTable />
      </div>
    </div>
  );
};

export default AdminEmployer;