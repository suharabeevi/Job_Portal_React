import { Request, Response } from "express";
import { CustomRequest } from "../../types/expressRequest";
import { EmployerDbInterface, employerDbRepository } from "../../application/repositories/employerDbRepository";
import { EmployerRepositoryMongoDB } from "../../framework/database/mongoDb/repositories/employerRepositoryMongoDB";
import expressAsyncHandler from "express-async-handler";
import { EmployerInterface } from "../../types/employerInterface";
import AppError from "../../utils/appError";
import { HttpStatus } from "../../types/httpStatus";
import { findEmployerById,checkEmployerVerificationUseCase } from "../../application/useCases/employer/employer";
import { EmployerModel } from "../../framework/database/mongoDb/models/employerModel";

const employerController = (
    employerDbRepository: EmployerDbInterface,
    employerDbRepositoryImpl: EmployerRepositoryMongoDB,
    employerModel: EmployerModel
  ) => {
    const dbRepositoryEmployer = employerDbRepository(
      employerDbRepositoryImpl(employerModel)
    );
  
    //for getting the data with token data.
    const getEmployerById = expressAsyncHandler(
      async (req: Request, res: Response) => {
        const customReq = req as CustomRequest;
        const id = customReq.payload ?? "";
        const employerData = await findEmployerById(id, dbRepositoryEmployer);
        res.json({ status: "success", employerData });
      }
    );
    //for getting the data with id only.
    const getEmployerByIdParam = expressAsyncHandler(
      async (req: Request, res: Response) => {
        const employerId = req.params.empId;
        const employerData = await findEmployerById(
          employerId,
          dbRepositoryEmployer
        );
        res.json(employerData);
      }
    );

    const checkEmployerVerified = expressAsyncHandler(async(req: CustomRequest,res:Response)=>{
      const customReq = req as CustomRequest;
      const EmployerId = customReq.payload ?? "";
      const result = await checkEmployerVerificationUseCase(EmployerId,dbRepositoryEmployer)
      res.json({
        status: true,
        message: 'successfully checked agent verified or not',
        result
      })
    })
  
    // const updateEmployer = expressAsyncHandler(
    //   async (req: Request, res: Response) => {
    //     const customReq = req as CustomRequest;
    //     const employerId = customReq.payload ?? "";
    //     if (!employerId) {
    //       throw new AppError(
    //         "unauthorized request, invalid token",
    //         HttpStatus.UNAUTHORIZED
    //       );
    //     }
    //     const updates: EmployerInterface = req.body;
    //     if (req?.file?.path) {
    //       updates.image = req?.file?.path;
    //     }
    //     const updateEmployerData = await updatedEmployer(
    //       employerId,
    //       updates,
    //       dbRepositoryEmployer
    //     );
  
    //     res.json({
    //       status: "success",
    //       updateEmployerData,
    //     });
    //   }
    // );
  
    return {
      getEmployerById,
    //   updateEmployer,
      getEmployerByIdParam,
      checkEmployerVerified
    };
  };
  
  export default employerController;