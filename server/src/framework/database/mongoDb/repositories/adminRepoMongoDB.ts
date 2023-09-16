import Admin from "../models/adminModel";
import { User } from "../models/userModel";
import { Employer } from "../models/employerModel";
import { AdminInterface } from "../../../../types/admin";
import { log } from "console";
import { ObjectId,Types } from "mongoose";


export const adminRepositoryMongoDB = () => {
    
    const getAdminByEmail = async (email: string) => {
      return Admin.findOne({ email });
    };
    const getAllusers = async () => {
        const AllUsers = await User.find();
        return AllUsers;
      };
      const getAllEmployers = async () => {
        const AllEmployers = await Employer.find();
        return AllEmployers;
      };
      const blockUser = async (objId: string) => {
        const id = new Types.ObjectId(objId);
        const user = await User.findById(id);
        const status = !user?.isActive;
        const result = await User.findOneAndUpdate(
          { _id: id },
          { $set: { isActive: status } }
        );
        return result;
      };
      const blockEmployer = async (objId: string) => {
        const id = new Types.ObjectId(objId);
        const employer = await Employer.findById(id);
        console.log(employer,"previous week employer");
        const status = !employer?.isActive;
        console.log(status,"status");
        const result = await Employer.findOneAndUpdate(
          { _id: id },
          { $set: { isActive: status } },
        );
        console.log(result,"updatedusr");
        return result;
      };
      const verifyEmployer = async (objId: string) => {
        const id = new Types.ObjectId(objId);
        const result = await Employer.findOneAndUpdate(
          {
            _id: id,
          },
          {
            $set: { isVerified: true },
          }
        );
    
    
        return result;
      };

      const getUnverifiedEmployers = async () => {
        const result = await Employer.find({ isVerified: false });
        return result;
      };
    return{
        getAdminByEmail,
        getAllusers,
        getAllEmployers,
        blockUser,
        blockEmployer,
        verifyEmployer,
        getUnverifiedEmployers
    }
}
export type AdminRepossitoryMongoDB = typeof adminRepositoryMongoDB;