import express from "express";
import authController from "../../../adapters/controllers/userAuthControllers";
import { userDbRepository } from "../../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../database/mongoDb/repositories/userRepositoryMongoDB";
import { authService } from "../../services/authService";
import { authServiceInterface } from "../../../application/services/authServiceInterface";
import { User } from "../../database/mongoDb/models/userModel";
import { googleAuthService } from "../../services/googleAuthService";
import { googleAuthServiceInterface } from "../../../application/services/googleAuthServiceInterface";
const userAuthRouter = () => {
  const route = express.Router();

  const controller = authController(
    authServiceInterface,
    authService,
    userDbRepository,
    UserRepositoryMongoDB,
    User,
    googleAuthServiceInterface,
    googleAuthService
   
  );
  console.log(controller,"yyyyyyyy");
  

  route.post("/register",controller.userRegister);
  route.post("/login", controller.loginUser);
   route.post("/sign-in-with-google", controller.signWithGoogle);

  return route;
};

export default userAuthRouter;