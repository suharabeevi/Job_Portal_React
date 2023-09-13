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
    console.log("uuuuuuu");
    const route = express.Router();
    const controller = adminController(
      authServiceInterface,
      authService,
      adminDbRepository,
      adminRepositoryMongoDB
    );
    console.log(controller,"admincontroller");
    route.post("/login", controller.adminLogin);
    route.get( "/get-all-users",authenticationMiddleware,adminRoleCheckMiddleware,controller.adminGetAllUsers);
    
    return route;
}
export default adminRouter;