import { EmployerRepositoryMongoDB } from "../../framework/database/mongoDb/repositories/employerRepositoryMongoDB";
import { CreateEmployerInterface, EmployerInterface } from "../../types/employerInterface";

export const employerDbRepository = (
    repository: ReturnType<EmployerRepositoryMongoDB>
 ) => {
    const getEmployerByEmail = async (email: string) => {
        return await repository.getEmployerByEmail(email);
    }

    const createEmployer = async (employer: CreateEmployerInterface) => {
        return await repository.createEmployer(employer);
    }

    const findEmployerById = async (id: string) => {
        const employer = await repository.getEmployerById(id);
        return employer;
    }

    
    const checkEmployerVerified = async(EmployerId: string)=> await repository.checkEmployerVerified(EmployerId)
    return {
        getEmployerByEmail,
        createEmployer,
        findEmployerById,
        checkEmployerVerified
        // updateEmployer
    }
 }

 export type EmployerDbInterface = typeof employerDbRepository;
