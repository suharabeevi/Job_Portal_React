import React from "react";
import UserTable from "../Tables/blockedUsers";
import PageTitle from "../../../Common/Headings";

const  AdminBlockedUser: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4  rounded-lg dark:border-gray-700 mt-14">
        <PageTitle title="Blocked Users"/>
        <UserTable />
      </div>
    </div>
  );
};

export default AdminBlockedUser;