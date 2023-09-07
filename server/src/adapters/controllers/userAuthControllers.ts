import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { AuthService } from "../../framework/services/authService";
import { UserModel } from "../../framework/database/mongoDb/models/userModel";
import { AuthServiceInterface } from "../../application/services/authServiceInterface";
import { UserDbInterface } from "../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../framework/database/mongoDb/repositories/userRepositoryMongoDB";
import { userLogin,registerUser,signInWithGoogle} from "../../application/useCases/auth/userAuth";
import { CreateUserInterface,UserInterface } from "../../types/userInterface";
import { GoogleAuthService } from "../../framework/services/googleAuthService";
import { GoogleAuthServiceInterface } from "../../application/services/googleAuthServiceInterface";
const authController = (
    authServiceInterface: AuthServiceInterface,
    authServiceImpl: AuthService,
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
    userModel: UserModel,
     googleAuthServiceInterface: GoogleAuthServiceInterface,
     googleAuthServiceImpl: GoogleAuthService
  ) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl(userModel));
    const authService = authServiceInterface(authServiceImpl());
     const googleAuthService = googleAuthServiceInterface(googleAuthServiceImpl());
  
    const userRegister = expressAsyncHandler(
      async (req: Request, res: Response) => {
        const user: CreateUserInterface = req?.body;
        console.log(user,"yes get user");
        
        await registerUser(user, dbRepositoryUser, authService);
        res.json({
          status: "success",
          message: "user registered successfully",
        });
      }
    );
    const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
      const { email, password }: { email: string; password: string } = req.body;
      console.log(req.body,"data");
      const token = await userLogin(
        email,
        password,
        dbRepositoryUser,
        authService
      );
     console.log(token,"token");
      
      res.json({
        status: "success",
        message: "user verified",
        token,
      });
    });
  
    const signWithGoogle = expressAsyncHandler(async (req: Request, res: Response) => {
      const {credential} : {credential: string} = req.body;
      console.log(req.body,"credentail");
      
      const token = await signInWithGoogle(credential, googleAuthService, dbRepositoryUser, authService);
      res.json({
        status: "success",
        message: "user verified",
        token
      })
    }) 
  
    return {
      loginUser,
      userRegister,
      signWithGoogle
    };
  };
  
  export default authController;