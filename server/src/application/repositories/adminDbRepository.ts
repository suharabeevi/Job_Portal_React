import { ObjectId } from "mongoose";
import { AdminRepossitoryMongoDB } from "../../framework/database/mongoDb/repositories/adminRepoMongoDB";
export const adminDbRepository = (
    repository: ReturnType<AdminRepossitoryMongoDB>
  ) => {
    const getAdminByEmail = async (email: string) =>await repository.getAdminByEmail(email);
    const getAllUsers = async () => await repository.getAllusers();
    console.log(getAdminByEmail,"getemail");
    
    return {
        getAdminByEmail,
        getAllUsers
    }
  }
  export type AdminDbInterface = typeof adminDbRepository;