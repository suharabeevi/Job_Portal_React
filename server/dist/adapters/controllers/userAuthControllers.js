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
const userAuth_1 = require("../../application/useCases/auth/userAuth");
const authController = (authServiceInterface, authServiceImpl, userDbRepository, userDbRepositoryImpl, userModel, emailService, emailServiceImpl) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl(userModel));
    const authService = authServiceInterface(authServiceImpl());
    const sendEmailService = emailService(emailServiceImpl());
    const userRegister = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req === null || req === void 0 ? void 0 : req.body;
        console.log(user, "yes get user");
        yield (0, userAuth_1.registerUser)(user, dbRepositoryUser, authService);
        res.json({
            status: "success",
            message: "user registered successfully",
        });
    }));
    const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        console.log(req.body, "data");
        const token = yield (0, userAuth_1.userLogin)(email, password, dbRepositoryUser, authService);
        console.log(token, "token");
        res.json({
            status: "success",
            message: "user verified",
            token,
        });
    }));
    const userUpdatePassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const customReq = req;
        const userId = (_a = customReq.payload) !== null && _a !== void 0 ? _a : " ";
        const editedPassword = req.body;
        console.log(userId, editedPassword);
        const result = yield (0, userAuth_1.userPasswordUpdateUseCase)(userId, editedPassword, dbRepositoryUser, authService);
        console.log(result);
        res.json({
            status: true,
            message: 'user password change successfuly',
            result
        });
    }));
    const updatePasswordWithEmail = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _b, _c, _d, _e;
        const email = (_c = (_b = req.body) === null || _b === void 0 ? void 0 : _b.email) !== null && _c !== void 0 ? _c : '';
        const obj = {
            newPassword: (_e = (_d = req.body) === null || _d === void 0 ? void 0 : _d.password) !== null && _e !== void 0 ? _e : ''
        };
        const result = yield (0, userAuth_1.updatePasswordWithEmailUseCase)(email, obj, dbRepositoryUser, authService);
        res.json({
            status: true,
            message: 'user password update successful',
            result
        });
    }));
    const generateOTPtoEmail = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _f, _g;
        const userEmail = (_g = (_f = req.body) === null || _f === void 0 ? void 0 : _f.email) !== null && _g !== void 0 ? _g : '';
        const result = yield (0, userAuth_1.generateOTPUseCase)(userEmail, dbRepositoryUser, sendEmailService);
        res.json({
            status: true,
            message: 'OTP sent to your Email success!',
            result
        });
    }));
    const verifyOTP = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _h, _j;
        const userOTP = (_j = (_h = req.body) === null || _h === void 0 ? void 0 : _h.otp) !== null && _j !== void 0 ? _j : '';
        const result = yield (0, userAuth_1.verifiyOTPUseCase)(userOTP.toString(), sendEmailService);
        res.json({
            status: true,
            message: 'OTP verification done!',
            result
        });
    }));
    return {
        loginUser,
        userRegister,
        userUpdatePassword,
        updatePasswordWithEmail,
        generateOTPtoEmail,
        verifyOTP
    };
};
exports.default = authController;
