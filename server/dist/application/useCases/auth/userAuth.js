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
exports.verifiyOTPUseCase = exports.generateOTPUseCase = exports.updatePasswordWithEmailUseCase = exports.userPasswordUpdateUseCase = exports.signInWithGoogle = exports.userLogin = exports.registerUser = void 0;
const httpStatus_1 = require("../../../types/httpStatus");
const appError_1 = __importDefault(require("../../../utils/appError"));
const registerUser = (user, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    user.email = user.email.toLowerCase();
    const isExistingEmail = yield userRepository.getUserByEmail(user.email);
    if (isExistingEmail) {
        throw new appError_1.default("email already exists", httpStatus_1.HttpStatus.CONFLICT);
    }
    user.password = yield authService.encryptPassword((_a = user.password) !== null && _a !== void 0 ? _a : "");
    const result = yield userRepository.createUser(user);
    return result;
});
exports.registerUser = registerUser;
const userLogin = (email, password, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const user = yield userRepository.getUserByEmail(email);
    if (!user) {
        throw new appError_1.default("this user does not exist", httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    if (user.isGoogleUser) {
        throw new appError_1.default("this user is unauthorized", httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    const isPasswordCorrect = yield authService.comparePassword(password, (_b = user.password) !== null && _b !== void 0 ? _b : "");
    if (!isPasswordCorrect) {
        throw new appError_1.default("Sorry, incorrect password", httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    const payload = user._id ? user._id.toString() : '';
    const token = authService.generateToken(payload, 'user');
    return token;
});
exports.userLogin = userLogin;
const signInWithGoogle = (credential, googleAuthService, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const user = yield googleAuthService.verify(credential);
    const isUserExist = yield userRepository.getUserByEmail(user.email);
    if (isUserExist) {
        const payload = (_c = isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist._id) === null || _c === void 0 ? void 0 : _c.toString();
        const token = authService.generateToken(payload !== null && payload !== void 0 ? payload : '', 'user');
        return token;
    }
    else {
        const { _id: userId } = yield userRepository.createUser(user);
        const payload = userId === null || userId === void 0 ? void 0 : userId.toString();
        const token = authService.generateToken(payload !== null && payload !== void 0 ? payload : '', 'user');
        return token;
    }
});
exports.signInWithGoogle = signInWithGoogle;
const userPasswordUpdateUseCase = (userId, eitedPassword, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield userRepository.getUserDataById(userId);
    console.log(userData);
    const userDbPassword = userData === null || userData === void 0 ? void 0 : userData.password;
    const isPasswordCorrect = yield authService.comparePassword(eitedPassword, userDbPassword !== null && userDbPassword !== void 0 ? userDbPassword : "");
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
        throw new appError_1.default("sorry, your password was incorrect.Please double-check your password", httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    const newPassword = yield authService.encryptPassword(eitedPassword.newPassword);
    const obj = {
        password: newPassword
    };
    const result = yield userRepository.userPasswordUpdate(userId, obj);
    console.log(result);
    return result;
});
exports.userPasswordUpdateUseCase = userPasswordUpdateUseCase;
const updatePasswordWithEmailUseCase = (emailId, eitedPassword, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    const newPassword = yield authService.encryptPassword(eitedPassword.newPassword);
    const obj = {
        password: newPassword
    };
    const email = emailId.toString();
    const result = yield userRepository.userPasswordUpdatewithEmail(email, obj);
    return result;
});
exports.updatePasswordWithEmailUseCase = updatePasswordWithEmailUseCase;
const generateOTPUseCase = (userEmail, userDbRepository, sendMailService) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistingEmail = yield userDbRepository.getUserByEmail(userEmail);
    if (!isExistingEmail) {
        throw new appError_1.default(`could not find user in this email`, httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    sendMailService.sendOtpEmail(userEmail);
    return isExistingEmail;
});
exports.generateOTPUseCase = generateOTPUseCase;
const verifiyOTPUseCase = (userOTP, sendMailService) => __awaiter(void 0, void 0, void 0, function* () {
    const response = sendMailService.verifyOTP(userOTP);
    if (response.message === 'OTP verified') {
        return true;
    }
    else if (response.message === 'OTP is expired') {
        throw new appError_1.default('OTP is expired!', httpStatus_1.HttpStatus.NOT_ACCEPTABLE);
    }
    else {
        throw new appError_1.default('OTP is Invalid!', httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
});
exports.verifiyOTPUseCase = verifiyOTPUseCase;
