import { JobApplicationInterface } from "../types/jobApplicationInterface";
import { JobApplicationModel } from "../framework/database/mongoDb/models/jobApplicationModel";
import { User } from "../framework/database/mongoDb/models/userModel";
import { Job } from "../framework/database/mongoDb/models/jobModel";
import { Employer } from "../framework/database/mongoDb/models/employerModel";
import { Types } from "mongoose";

export class JobApplicationEntity {
    public model: JobApplicationModel;
    constructor(model: JobApplicationModel) {
      this.model = model;
    }
    public async applyForJob(
      data: JobApplicationInterface
    ): Promise<JobApplicationInterface | null> {
      const applicationExists = await this.model.findOne({
        userId: data.userId,
        jobId: data.jobId,
      });
      if (!applicationExists) {
        const newApplication = await this.model.create(data);
        return newApplication;
      }
      return null;
    }
    public async isApplied(jobId: string, userId: string): Promise<any> {
      const appliedJod = await this.model.findOne({
        jobId: jobId,
        userId: userId,
      });
      if (appliedJod) {
        return appliedJod;
      }
    }
}