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
const employer_1 = require("../../application/useCases/employer/employer");
const employerController = (employerDbRepository, employerDbRepositoryImpl, employerModel) => {
    const dbRepositoryEmployer = employerDbRepository(employerDbRepositoryImpl(employerModel));
    const getEmployerById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const customReq = req;
        const id = (_a = customReq.payload) !== null && _a !== void 0 ? _a : "";
        const employerData = yield (0, employer_1.findEmployerById)(id, dbRepositoryEmployer);
        res.json({ status: "success", employerData });
    }));
    const getEmployerByIdParam = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const employerId = req.params.empId;
        const employerData = yield (0, employer_1.findEmployerById)(employerId, dbRepositoryEmployer);
        res.json(employerData);
    }));
    const checkEmployerVerified = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        const customReq = req;
        const EmployerId = (_b = customReq.payload) !== null && _b !== void 0 ? _b : "";
        const result = yield (0, employer_1.checkEmployerVerificationUseCase)(EmployerId, dbRepositoryEmployer);
        res.json({
            status: true,
            message: 'successfully checked agent verified or not',
            result
        });
    }));
    return {
        getEmployerById,
        getEmployerByIdParam,
        checkEmployerVerified
    };
};
exports.default = employerController;
