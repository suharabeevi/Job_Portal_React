import express from "express";
import employerAuthController from "../../../adapters/controllers/employerAuthController";
import { employerDbRepository } from "../../../application/repositories/employerDbRepository";
import { EmployerRepositoryMongoDB } from "../../database/mongoDb/repositories/employerRepositoryMongoDB";
import { authService } from "../../services/authService";
import { authServiceInterface } from "../../../application/services/authServiceInterface";
import {Employer} from "../../database/mongoDb/models/employerModel";

const employerAuthRouter = () => {
    const route = express.Router();
  
    const controller = employerAuthController(
      authServiceInterface,
      authService,
      employerDbRepository,
      EmployerRepositoryMongoDB,
      Employer,
    //   emailServiceInterface,
    //   sendEmailService
    );
  
    route.post("/register", controller.employerRegister);
    route.post("/login", controller.loginEmployer);
    // route.get("/email-verify/:emailId", controller.emailVerification);
    // route.get("/email-OTP/:OTP", controller.OTPVerification);
  
    return route;
  };
  
  export default employerAuthRouter;