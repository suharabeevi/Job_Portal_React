import { Types } from "mongoose";
import { JobApplicationRepositoryMongoDB } from "../../framework/database/mongoDb/repositories/jobApplicationRepositoryMongoDB";
import { JobApplicationInterface } from "../../types/jobApplicationInterface";

export const jobApplicationDbRepository = (
    repository: ReturnType<JobApplicationRepositoryMongoDB>
) => {
    const applyForJob = async (application: JobApplicationInterface) => {
        const newApplication = await repository.applyForJob(application);
        return newApplication;
    }
    const alreadyApplied = async (jobId: string, userId: string) => {
        const existingApplication = await repository.alreadyApplied(jobId, userId);
        return existingApplication;
    }
    return {
        applyForJob,
        alreadyApplied,
    }
}
export type JobApplicationDbInterface = typeof jobApplicationDbRepository;