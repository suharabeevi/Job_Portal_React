import { Request, Response } from "express";
import { CustomRequest } from "../../types/expressRequest";
import { UserDbInterface } from "../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../framework/database/mongoDb/repositories/userRepositoryMongoDB";
import expressAsyncHandler from "express-async-handler";
import { UserModel } from "../../framework/database/mongoDb/models/userModel";
import AppError from "../../utils/appError";
import { HttpStatus } from "../../types/httpStatus";
import { UserInterface } from "../../types/userInterface";
import { findByEmail,findUserDataById } from "../../application/useCases/user/user";

const userController = (
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
    userModel: UserModel
  ) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl(userModel));
  
    const getUserByEmail = expressAsyncHandler(
      async (req: Request, res: Response) => {
        // console.log(req.body)
        const { email } = req.body;
        const user = await findByEmail(email, dbRepositoryUser);
        res.json(user);
      }
    );
  
    // get user by toke id
    const getUserDataById = expressAsyncHandler(
      async (req: Request, res: Response) => {
        const customReq = req as CustomRequest;
        const id = customReq.payload ?? " ";
        const userData = await findUserDataById(id, dbRepositoryUser);
        res.json(userData);
      }
    );
    // by id in param
    const getUserDataByIdParam = expressAsyncHandler(
      async (req: Request, res: Response) => {
        const id = req.params?.userId ?? "";
        const userData = await findUserDataById(id, dbRepositoryUser);
        res.json(userData);
      }
    );
    
  
    return {
        getUserByEmail,
        getUserDataById,
        getUserDataByIdParam
      };
    };
    
    export default userController;  