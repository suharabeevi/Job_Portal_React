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
exports.adminDbRepository = void 0;
const adminDbRepository = (repository) => {
    const getAdminByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getAdminByEmail(email); });
    const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getAllusers(); });
    const getAllBlockedUsers = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getAllBlockedUsers(); });
    const getAllEmployers = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getAllEmployers(); });
    const blockUser = (ojbId) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.blockUser(ojbId); });
    const blockEmployer = (ojbId) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.blockEmployer(ojbId); });
    const verifyEmployer = (objId) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.verifyEmployer(objId); });
    const getUnverifiedEmployers = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getUnverifiedEmployers(); });
    const BasicDetailsUserEmployer = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.BasicDetailsUserEmployer(); });
    const getEmplyerStatus = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getEmployerStatus(); });
    return {
        getAdminByEmail,
        getAllUsers,
        getAllEmployers,
        blockUser,
        blockEmployer,
        verifyEmployer,
        getUnverifiedEmployers,
        BasicDetailsUserEmployer,
        getEmplyerStatus,
        getAllBlockedUsers
    };
};
exports.adminDbRepository = adminDbRepository;
