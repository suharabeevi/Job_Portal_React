import UnverifiedEmployerTable from "../Tables/UnverifiedEmployers";

const AdminEmployerVerification: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4  rounded-lg dark:border-gray-700 mt-14">
        <UnverifiedEmployerTable />
      </div>
    </div>
  );
};

export default AdminEmployerVerification;