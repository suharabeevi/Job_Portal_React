import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { AuthService } from "../../framework/services/authService";
import { AuthServiceInterface } from "../../application/services/authServiceInterface";
import { EmployerDbInterface } from "../../application/repositories/employerDbRepository";
import { EmployerRepositoryMongoDB } from "../../framework/database/mongoDb/repositories/employerRepositoryMongoDB";
import { EmployerInterface } from "../../types/employerInterface";
import { EmployerModel } from "../../framework/database/mongoDb/models/employerModel";
import { registerEmployer,employerLogin } from "../../application/useCases/auth/employerAuth";

const employerAuthController = (
  authServiceInterface: AuthServiceInterface,
  authServiceImpl: AuthService,
  employerDbRepository: EmployerDbInterface,
  employerDbRepositoryImpl: EmployerRepositoryMongoDB,
  employer: EmployerModel,
//   emailService: EmailServiceInterface,
//   emailServiceImpl: SendEmailService
) => {
  const dbRepositoryEmployer = employerDbRepository(
    employerDbRepositoryImpl(employer)
  );
  const authService = authServiceInterface(authServiceImpl());
//   const sendEmailService = emailService(emailServiceImpl());

  const employerRegister = expressAsyncHandler(
    async (req: Request, res: Response) => {
      const employer: EmployerInterface = req.body;
      await registerEmployer(employer, dbRepositoryEmployer, authService);
      res.json({
        status: "success",
        message: "employer registered successfully",
      });
    }
  );

  const loginEmployer = expressAsyncHandler(
    async (req: Request, res: Response) => {
      const { email, password }: { email: string; password: string } = req.body;
      const token = await employerLogin(
        email,
        password,
        dbRepositoryEmployer,
        authService
      );
      res.json({
        status: "success",
        message: "employer verified",
        token,
      });
    }
  )

  return{
    loginEmployer,
    employerRegister,
  }
}
  export default employerAuthController;