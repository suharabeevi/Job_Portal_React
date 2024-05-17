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
exports.checkEmployerVerificationUseCase = exports.findEmployerById = void 0;
const httpStatus_1 = require("../../../types/httpStatus");
const appError_1 = __importDefault(require("../../../utils/appError"));
const findEmployerById = (id, dbRepositoryEmployer) => {
    try {
        const employer = dbRepositoryEmployer.findEmployerById(id);
        if (!employer) {
            throw new appError_1.default('No employer found', httpStatus_1.HttpStatus.UNAUTHORIZED);
        }
        return employer;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.findEmployerById = findEmployerById;
const checkEmployerVerificationUseCase = (EmployerId, dbRepositoryEmployer) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbRepositoryEmployer.checkEmployerVerified(EmployerId);
    return result;
});
exports.checkEmployerVerificationUseCase = checkEmployerVerificationUseCase;
