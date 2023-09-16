import express from "express";
import { authService } from "../../services/authService";
import { authServiceInterface } from "../../../application/services/authServiceInterface";
import { adminDbRepository } from "../../../application/repositories/adminDbRepository";
import { adminRepositoryMongoDB } from "../../database/mongoDb/repositories/adminRepoMongoDB";
import adminController from "../../../adapters/controllers/adminControllers";
import authenticationMiddleware from "../middleware/AuthenticationMiddleware";
import roleMiddleware from "../middleware/roleMiddleware";
const adminRoleCheckMiddleware = roleMiddleware('admin');

const adminRouter =()=>{
    const route = express.Router();
    const controller = adminController(
      authServiceInterface,
      authService,
      adminDbRepository,
      adminRepositoryMongoDB
    );
  
    route.post("/login", controller.adminLogin);
    route.get( "/get-all-users",authenticationMiddleware,adminRoleCheckMiddleware,controller.adminGetAllUsers);
    route.get("/get-all-employers",authenticationMiddleware,adminRoleCheckMiddleware,controller.adminGetAllEmployers);
    route.post("/block-user/:id",authenticationMiddleware,adminRoleCheckMiddleware,controller.adminBlockUser);
    route.post("/block-employer/:id",authenticationMiddleware,adminRoleCheckMiddleware,controller.adminBlockEmployer);
    route.post("/Employer-verification/:id",authenticationMiddleware,adminRoleCheckMiddleware,controller.verifyEmployer);
    route.get("/get-all-unverified-Employers",authenticationMiddleware,adminRoleCheckMiddleware,controller.getUnverifiedEmployers)
    return route;
}

export default adminRouter;