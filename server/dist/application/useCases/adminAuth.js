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
exports.getEmployerStatusUseCase = exports.BasicDetailsUserEmployerUseCase = exports.adminGetUnverifiedEmployersUseCase = exports.adminVerifyEmployerUseCase = exports.adminBlockEmployerUseCase = exports.adminBlockUserUseCase = exports.adminGetAllEmployerUseCase = exports.adminGetAllBlockedUsersUseCase = exports.adminGetAllUsersUseCase = exports.adminLoginUseCase = void 0;
const httpStatus_1 = require("../../types/httpStatus");
const appError_1 = __importDefault(require("../../utils/appError"));
const adminLoginUseCase = (email, password, adminRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const admin = yield adminRepository.getAdminByEmail(email);
    if (!admin) {
        throw new appError_1.default("There is no admin in this email", httpStatus_1.HttpStatus.NOT_FOUND);
    }
    const isPasswordCorrect = yield authService.comparePassword(password, (_a = admin === null || admin === void 0 ? void 0 : admin.password) !== null && _a !== void 0 ? _a : "");
    console.log(isPasswordCorrect, "passwordiscorrect");
    if (!isPasswordCorrect) {
        throw new appError_1.default("sorry , your password was incorrect.Please double-check your password", httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    const payload = admin._id ? admin._id.toString() : '';
    const token = authService.generateToken(payload, 'admin');
    return token;
});
exports.adminLoginUseCase = adminLoginUseCase;
const adminGetAllUsersUseCase = (adminRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield adminRepository.getAllUsers();
    if (!userData) {
        throw new appError_1.default("No users found", httpStatus_1.HttpStatus.NOT_FOUND);
    }
    return userData;
});
exports.adminGetAllUsersUseCase = adminGetAllUsersUseCase;
const adminGetAllBlockedUsersUseCase = (adminRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield adminRepository.getAllBlockedUsers();
    if (!userData) {
        throw new appError_1.default("No users found", httpStatus_1.HttpStatus.NOT_FOUND);
    }
    return userData;
});
exports.adminGetAllBlockedUsersUseCase = adminGetAllBlockedUsersUseCase;
const adminGetAllEmployerUseCase = (adminDbRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const EmployerData = yield adminDbRepository.getAllEmployers();
    if (!EmployerData) {
        throw new appError_1.default("No agents found", httpStatus_1.HttpStatus.NOT_FOUND);
    }
    return EmployerData;
});
exports.adminGetAllEmployerUseCase = adminGetAllEmployerUseCase;
const adminBlockUserUseCase = (adminDbRepository, ojbId) => __awaiter(void 0, void 0, void 0, function* () {
    const adminBlockUser = yield adminDbRepository.blockUser(ojbId);
    if (!adminBlockUser) {
        throw new appError_1.default("Operation failed", httpStatus_1.HttpStatus.NOT_MODIFIED);
    }
    return adminBlockUser;
});
exports.adminBlockUserUseCase = adminBlockUserUseCase;
const adminBlockEmployerUseCase = (adminDbRepository, ojbId) => __awaiter(void 0, void 0, void 0, function* () {
    const adminBlockEmployer = yield adminDbRepository.blockEmployer(ojbId);
    if (!adminBlockEmployer) {
        throw new appError_1.default("Operation failed", httpStatus_1.HttpStatus.NOT_MODIFIED);
    }
    return adminBlockEmployer;
});
exports.adminBlockEmployerUseCase = adminBlockEmployerUseCase;
const adminVerifyEmployerUseCase = (adminDbRepository, objId) => __awaiter(void 0, void 0, void 0, function* () {
    const adminVerifyEmployer = yield adminDbRepository.verifyEmployer(objId);
    if (!adminVerifyEmployer) {
        throw new appError_1.default("Operation failed", httpStatus_1.HttpStatus.NOT_MODIFIED);
    }
    return adminVerifyEmployer;
});
exports.adminVerifyEmployerUseCase = adminVerifyEmployerUseCase;
const adminGetUnverifiedEmployersUseCase = (adminDbRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllUnverifiedEmployers = yield adminDbRepository.getUnverifiedEmployers();
    if (!getAllUnverifiedEmployers) {
        throw new appError_1.default("Operation failed", httpStatus_1.HttpStatus.NOT_FOUND);
    }
    return getAllUnverifiedEmployers;
});
exports.adminGetUnverifiedEmployersUseCase = adminGetUnverifiedEmployersUseCase;
const BasicDetailsUserEmployerUseCase = (adminDbRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adminDbRepository.BasicDetailsUserEmployer();
    if (!result) {
        throw new appError_1.default('could not fetch basic details of user agent package ', httpStatus_1.HttpStatus.NOT_FOUND);
    }
    return result;
});
exports.BasicDetailsUserEmployerUseCase = BasicDetailsUserEmployerUseCase;
const getEmployerStatusUseCase = (adminDbRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adminDbRepository.getEmplyerStatus();
    if (!result) {
        throw new appError_1.default('could not fetch agents status', httpStatus_1.HttpStatus.NOT_FOUND);
    }
    return result;
});
exports.getEmployerStatusUseCase = getEmployerStatusUseCase;
