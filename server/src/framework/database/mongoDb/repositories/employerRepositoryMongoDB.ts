import { CreateEmployerInterface,EmployerInterface } from "../../../../types/employerInterface";
import {EmployerModel} from "../models/employerModel";
import { EmployerEntity } from "../../../../entities/EmployerEntity";
import { Types } from "mongoose";


export const EmployerRepositoryMongoDB = (model: EmployerModel) =>{
    const employerEntity = new EmployerEntity(model);

    const getEmployerByEmail = async (email: string) => {
        const employer = employerEntity.getEmployerByEmail(email);
        return employer;
    }

    const createEmployer = async (employer: CreateEmployerInterface) => {
        const newEmployer = employerEntity.createEmployer(employer);
        return newEmployer;
    }

    const getEmployerById = async (id: string) => {
        const employer = employerEntity.getEmployerById(id);
        return employer;
    }
    // const checkEmployerVerified = async (id: string) => {
    //     const employer = employerEntity.getEmployerverified(id);
    //     return employer;
    // }
    const checkEmployerVerified = async (EmployerId: string) => {
        const id = new Types.ObjectId(EmployerId);
        const result = await model.findOne({ _id: id, isVerified: true });
        return result ? true : false;
      };

    return {
        getEmployerByEmail,
        createEmployer,
        getEmployerById,
        checkEmployerVerified
        // updateEmployer,
    }
}

export type EmployerRepositoryMongoDB = typeof EmployerRepositoryMongoDB;