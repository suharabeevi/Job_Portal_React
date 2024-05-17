"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const adminAuth_1 = require("../../application/useCases/adminAuth");
const adminController = (authServiceInterface, authService, adminDbRepositoryInterface, adminDbRepositoryMongoDb) => {
    const dbRepositoryAdmin = adminDbRepositoryInterface(adminDbRepositoryMongoDb());
    console.log(dbRepositoryAdmin, "dbRepositoryAdmin");
    const authServices = authServiceInterface(authService());
    const adminLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const { email, password } = req.body;
        const token = yield (0, adminAuth_1.adminLoginUseCase)(email, password, dbRepositoryAdmin, authServices);
        res.json({
            status: true,
            message: 'admin login successful',
            token
        });
    }));
    const adminGetAllUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = yield (0, adminAuth_1.adminGetAllUsersUseCase)(dbRepositoryAdmin);
        res.json({
            status: 'success',
            userData
        });
    }));
    const adminGetAllUsersBlockedUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = yield (0, adminAuth_1.adminGetAllBlockedUsersUseCase)(dbRepositoryAdmin);
        res.json({
            status: 'success',
            userData
        });
    }));
    const adminGetAllEmployers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const EmployerData = yield (0, adminAuth_1.adminGetAllEmployerUseCase)(dbRepositoryAdmin);
        res.json({
            status: 'success',
            EmployerData
        });
    }));
    const adminBlockUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.params.id;
        console.log(userId, "getuserid");
        const result = yield (0, adminAuth_1.adminBlockUserUseCase)(dbRepositoryAdmin, userId);
        res.json({
            status: 'success',
            result
        });
    }));
    const adminBlockEmployer = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const EmployerId = req.params.id;
        const result = yield (0, adminAuth_1.adminBlockEmployerUseCase)(dbRepositoryAdmin, EmployerId);
        console.log(result, "current result");
        res.json({
            status: 'success',
            result
        });
    }));
    const verifyEmployer = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const EmployerId = req.params.id;
        const result = yield (0, adminAuth_1.adminVerifyEmployerUseCase)(dbRepositoryAdmin, EmployerId);
        res.json({
            status: 'success',
            result
        });
    }));
    const getUnverifiedEmployers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, adminAuth_1.adminGetUnverifiedEmployersUseCase)(dbRepositoryAdmin);
        res.json({
            status: 'success',
            result
        });
    }));
    const BasicDetailsUserEmployer = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, adminAuth_1.BasicDetailsUserEmployerUseCase)(dbRepositoryAdmin);
        res.json({
            status: 'success',
            result
        });
    }));
    const getEmployerStatus = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, adminAuth_1.getEmployerStatusUseCase)(dbRepositoryAdmin);
        res.json({
            status: true,
            message: 'fetch Employer status successfully',
            result
        });
    }));
    return {
        adminLogin,
        adminGetAllUsers,
        adminGetAllEmployers,
        adminBlockUser,
        adminBlockEmployer,
        verifyEmployer,
        getUnverifiedEmployers,
        BasicDetailsUserEmployer,
        getEmployerStatus,
        adminGetAllUsersBlockedUsers
    };
};
exports.default = adminController;
