"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employerModel_1 = require("../../database/mongoDb/models/employerModel");
const employerController_1 = __importDefault(require("../../../adapters/controllers/employerController"));
const employerDbRepository_1 = require("../../../application/repositories/employerDbRepository");
const employerRepositoryMongoDB_1 = require("../../database/mongoDb/repositories/employerRepositoryMongoDB");
const AuthenticationMiddleware_1 = __importDefault(require("../middleware/AuthenticationMiddleware"));
const roleMiddleware_1 = __importDefault(require("../middleware/roleMiddleware"));
const employerMiddleware = (0, roleMiddleware_1.default)('employer');
const employerRouter = () => {
    const route = express_1.default.Router();
    const controller = (0, employerController_1.default)(employerDbRepository_1.employerDbRepository, employerRepositoryMongoDB_1.EmployerRepositoryMongoDB, employerModel_1.Employer);
    route.get('/employer-data', AuthenticationMiddleware_1.default, employerMiddleware, controller.getEmployerById);
    route.get('/employer-data/:empId', controller.getEmployerByIdParam);
    route.get('/isverified', AuthenticationMiddleware_1.default, employerMiddleware, controller.checkEmployerVerified);
    return route;
};
exports.default = employerRouter;
