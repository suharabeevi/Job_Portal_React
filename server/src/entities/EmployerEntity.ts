import { CreateEmployerInterface, EmployerInterface } from "../types/employerInterface";
import { EmployerModel } from "../framework/database/mongoDb/models/employerModel";


export class EmployerEntity {
    private model: EmployerModel;
  
    constructor(model: EmployerModel) {
      this.model = model; 
    }
    public async getEmployerByEmail(email: string): Promise<EmployerInterface | null> {
      const employer = await this.model.findOne({ email }).exec();
      return employer;
    }
  
    public async createEmployer(employer: CreateEmployerInterface): Promise<EmployerInterface> {
      const newEmployer = await this.model.create(employer);
      return newEmployer;
    }
  
    public async getEmployerById(id: string) : Promise <EmployerInterface |null > {
      const employer = await this.model.findById(id);
      return employer;
    }
    // public async getEmployerverified(id:string) : Promise <EmployerInterface |null>{
    //   const employer = await this.model.findById({ _id: id, isVerified: true });
    //   return employer ? true : false;
    }
