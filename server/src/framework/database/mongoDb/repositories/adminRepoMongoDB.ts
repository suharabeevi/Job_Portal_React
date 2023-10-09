import Admin from "../models/adminModel";
import { User } from "../models/userModel";
import { Employer } from "../models/employerModel";
import { Job } from "../models/jobModel";
import { JobApplication } from "../models/jobApplicationModel";
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
      const getAllBlockedUsers = async () => {
        const blockedUsers = await User.find({ isActive: false });
        return blockedUsers;
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


      const BasicDetailsUserEmployer = async () => {
        const UserCount = await User.countDocuments({});
    
        const EmployerCount = await Employer.countDocuments({});
        const jobCount = await Job.countDocuments({});
        const JobApplicationCount = await JobApplication.find({ 
          applicationStatus: "Shortlisted" }).count();
    
        const resObj = {
          UserCount,
          EmployerCount,
          jobCount,
          JobApplicationCount,
        };
    
        console.log(resObj);
        return resObj;
      };

      const getEmployerStatus = async () => {
        const result = await Employer.aggregate([
          {
            $group: {
              _id: null,
              activeCount: {
                $sum: { $cond: [{ $eq: ["$isActive", true] }, 1, 0] },
              },
              inactiveCount: {
                $sum: { $cond: [{ $eq: ["$isActive", false] }, 1, 0] },
              },
              verifiedCount: {
                $sum: { $cond: [{ $eq: ["$isVerified", true] }, 1, 0] },
              },
              notVerifiedCount: {
                $sum: { $cond: [{ $eq: ["$isVerified", false] }, 1, 0] },
              },
            },
          },
          {
            $project: {
              _id: 0,
            },
          },
        ]);
    
        return result[0];
      };
    
    return{
        getAdminByEmail,
        getAllusers,
        getAllEmployers,
        blockUser,
        blockEmployer,
        verifyEmployer,
        getUnverifiedEmployers,
        BasicDetailsUserEmployer,
        getEmployerStatus,
        getAllBlockedUsers
    }
}
export type AdminRepossitoryMongoDB = typeof adminRepositoryMongoDB;