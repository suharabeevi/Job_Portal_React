import { ObjectId } from "mongoose";
import { AdminRepossitoryMongoDB } from "../../framework/database/mongoDb/repositories/adminRepoMongoDB";
export const adminDbRepository = (
    repository: ReturnType<AdminRepossitoryMongoDB>
  ) => {
    const getAdminByEmail = async (email: string) =>await repository.getAdminByEmail(email);
    const getAllUsers = async () => await repository.getAllusers();
    const getAllBlockedUsers = async () => await repository.getAllBlockedUsers();
    const getAllEmployers = async () => await repository.getAllEmployers();
    const blockUser = async (ojbId: string) => await repository.blockUser(ojbId);
    const blockEmployer = async (ojbId: string) =>await repository.blockEmployer(ojbId);
    const verifyEmployer = async (objId: string) =>await repository.verifyEmployer(objId);
    const getUnverifiedEmployers = async () =>await repository.getUnverifiedEmployers();
    const BasicDetailsUserEmployer = async () =>await repository.BasicDetailsUserEmployer();
    const getEmplyerStatus = async () => await repository.getEmployerStatus();
    return {
        getAdminByEmail,
        getAllUsers,
        getAllEmployers,
        blockUser,
        blockEmployer,
        verifyEmployer,
        getUnverifiedEmployers,
        BasicDetailsUserEmployer,
        getEmplyerStatus,
        getAllBlockedUsers
    }
  }
  export type AdminDbInterface = typeof adminDbRepository;