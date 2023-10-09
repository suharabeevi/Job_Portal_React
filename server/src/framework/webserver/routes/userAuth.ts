import express from "express";
import authController from "../../../adapters/controllers/userAuthControllers";
import { userDbRepository } from "../../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../database/mongoDb/repositories/userRepositoryMongoDB";
import { authService } from "../../services/authService";
import { authServiceInterface } from "../../../application/services/authServiceInterface";
import { User } from "../../database/mongoDb/models/userModel";
import { googleAuthService } from "../../services/googleAuthService";
import { googleAuthServiceInterface } from "../../../application/services/googleAuthServiceInterface";
import authenticationMiddleware from '../middleware/AuthenticationMiddleware';
import roleMiddleware from "../middleware/roleMiddleware";
const userMiddleware = roleMiddleware('user');
import { emailServiceInterface } from "../../../application/services/emailServiceInterface";
import { sendEmailService } from "../../services/emailService";
const userAuthRouter = () => {
  const route = express.Router();

  const controller = authController(
    authServiceInterface,
    authService,
    userDbRepository,
    UserRepositoryMongoDB,
    User,
    emailServiceInterface,
      sendEmailService
   
  );
  console.log(controller,"yyyyyyyy");
  route.post("/register",controller.userRegister);
  route.post("/login", controller.loginUser);
  // route.post("/sign-in-with-google", controller.signWithGoogle);
   route.post('/user-password-update',authenticationMiddleware,userMiddleware,controller.userUpdatePassword)
    route.post('/user-password-update-withEmail',controller.updatePasswordWithEmail)
    route.post('/user-generate-otp',controller.generateOTPtoEmail)
    route.post('/verify-otp',controller.verifyOTP)
  return route;
};

export default userAuthRouter;