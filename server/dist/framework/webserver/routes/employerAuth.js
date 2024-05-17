"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employerAuthController_1 = __importDefault(require("../../../adapters/controllers/employerAuthController"));
const employerDbRepository_1 = require("../../../application/repositories/employerDbRepository");
const employerRepositoryMongoDB_1 = require("../../database/mongoDb/repositories/employerRepositoryMongoDB");
const authService_1 = require("../../services/authService");
const authServiceInterface_1 = require("../../../application/services/authServiceInterface");
const employerModel_1 = require("../../database/mongoDb/models/employerModel");
const emailServiceInterface_1 = require("../../../application/services/emailServiceInterface");
const emailService_1 = require("../../services/emailService");
const cloudinary_1 = require("../middleware/cloudinary");
const employerAuthRouter = () => {
    const route = express_1.default.Router();
    const controller = (0, employerAuthController_1.default)(authServiceInterface_1.authServiceInterface, authService_1.authService, employerDbRepository_1.employerDbRepository, employerRepositoryMongoDB_1.EmployerRepositoryMongoDB, employerModel_1.Employer, emailServiceInterface_1.emailServiceInterface, emailService_1.sendEmailService);
    console.log(controller, "employee controller");
    route.post("/register", cloudinary_1.uploads, controller.employerRegister);
    route.post("/login", controller.loginEmployer);
    route.get("/email-verify/:emailId", controller.emailVerification);
    route.get("/email-OTP/:OTP", controller.OTPVerification);
    return route;
};
exports.default = employerAuthRouter;
