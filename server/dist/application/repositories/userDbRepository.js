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
exports.userDbRepository = void 0;
const userDbRepository = (repository) => {
    const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getUserByEmail(email);
    });
    const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.createUser(user);
    });
    const getUserDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = yield repository.getUserDataById(id);
        return userData;
    });
    const updateUser = (userId, updates) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = yield repository.updateUser(userId, updates);
        return updatedUser;
    });
    const deleteResume = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        yield repository.deleteResume(userId);
    });
    const userPasswordUpdate = (userId, editedPassword) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.userPasswordUpdate(userId, editedPassword); });
    const userPasswordUpdatewithEmail = (email, editedPassword) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.userPasswordUpdatewithEmail(email, editedPassword); });
    return {
        getUserByEmail,
        createUser,
        getUserDataById,
        updateUser,
        deleteResume,
        userPasswordUpdate,
        userPasswordUpdatewithEmail
    };
};
exports.userDbRepository = userDbRepository;
