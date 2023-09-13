import Admin from "../models/adminModel";
import { User } from "../models/userModel";
import { AdminInterface } from "../../../../types/admin";
import { log } from "console";


export const adminRepositoryMongoDB = () => {
    
    const getAdminByEmail = async (email: string) => {
      return Admin.findOne({ email });
    };
    const getAllusers = async () => {
        const AllUsers = await User.find();
        return AllUsers;
      };
    console.log(getAdminByEmail,"getAdminByEmail");
    return{
        getAdminByEmail,
        getAllusers
    }
}


export type AdminRepossitoryMongoDB = typeof adminRepositoryMongoDB;