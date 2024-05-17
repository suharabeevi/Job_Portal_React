"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../../../adapters/controllers/userControllers"));
const userDbRepository_1 = require("../../../application/repositories/userDbRepository");
const userRepositoryMongoDB_1 = require("../../database/mongoDb/repositories/userRepositoryMongoDB");
const userModel_1 = require("../../database/mongoDb/models/userModel");
const AuthenticationMiddleware_1 = __importDefault(require("../middleware/AuthenticationMiddleware"));
const roleMiddleware_1 = __importDefault(require("../middleware/roleMiddleware"));
const cloudinary_1 = require("../middleware/cloudinary");
const userMiddleware = (0, roleMiddleware_1.default)('user');
const userRouter = () => {
    const route = express_1.default.Router();
    const controller = (0, userControllers_1.default)(userDbRepository_1.userDbRepository, userRepositoryMongoDB_1.UserRepositoryMongoDB, userModel_1.User);
    route.get('/user-data', AuthenticationMiddleware_1.default, userMiddleware, controller.getUserDataById);
    route.put('/update-user', AuthenticationMiddleware_1.default, userMiddleware, cloudinary_1.upload, controller.updateTheUser);
    route.put('/update-resume', AuthenticationMiddleware_1.default, userMiddleware, cloudinary_1.upload, controller.updateTheResume);
    route.delete('/delete-resume', AuthenticationMiddleware_1.default, userMiddleware, controller.userDeleteResume);
    route.get('/user-data/:userId', controller.getUserDataByIdParam);
    return route;
};
exports.default = userRouter;
