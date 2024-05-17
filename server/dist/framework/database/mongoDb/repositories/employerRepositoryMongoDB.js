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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployerRepositoryMongoDB = void 0;
const EmployerEntity_1 = require("../../../../entities/EmployerEntity");
const mongoose_1 = require("mongoose");
const EmployerRepositoryMongoDB = (model) => {
    const employerEntity = new EmployerEntity_1.EmployerEntity(model);
    const getEmployerByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        const employer = employerEntity.getEmployerByEmail(email);
        return employer;
    });
    const createEmployer = (employer) => __awaiter(void 0, void 0, void 0, function* () {
        const newEmployer = employerEntity.createEmployer(employer);
        return newEmployer;
    });
    const getEmployerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const employer = employerEntity.getEmployerById(id);
        return employer;
    });
    const checkEmployerVerified = (EmployerId) => __awaiter(void 0, void 0, void 0, function* () {
        const id = new mongoose_1.Types.ObjectId(EmployerId);
        const result = yield model.findOne({ _id: id, isVerified: true });
        return result ? true : false;
    });
    return {
        getEmployerByEmail,
        createEmployer,
        getEmployerById,
        checkEmployerVerified
    };
};
exports.EmployerRepositoryMongoDB = EmployerRepositoryMongoDB;
