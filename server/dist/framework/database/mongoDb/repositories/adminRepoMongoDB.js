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
exports.adminRepositoryMongoDB = void 0;
const adminModel_1 = __importDefault(require("../models/adminModel"));
const userModel_1 = require("../models/userModel");
const employerModel_1 = require("../models/employerModel");
const jobModel_1 = require("../models/jobModel");
const jobApplicationModel_1 = require("../models/jobApplicationModel");
const mongoose_1 = require("mongoose");
const adminRepositoryMongoDB = () => {
    const getAdminByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        return adminModel_1.default.findOne({ email });
    });
    const getAllusers = () => __awaiter(void 0, void 0, void 0, function* () {
        const AllUsers = yield userModel_1.User.find();
        return AllUsers;
    });
    const getAllBlockedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
        const blockedUsers = yield userModel_1.User.find({ isActive: false });
        return blockedUsers;
    });
    const getAllEmployers = () => __awaiter(void 0, void 0, void 0, function* () {
        const AllEmployers = yield employerModel_1.Employer.find();
        return AllEmployers;
    });
    const blockUser = (objId) => __awaiter(void 0, void 0, void 0, function* () {
        const id = new mongoose_1.Types.ObjectId(objId);
        const user = yield userModel_1.User.findById(id);
        const status = !(user === null || user === void 0 ? void 0 : user.isActive);
        const result = yield userModel_1.User.findOneAndUpdate({ _id: id }, { $set: { isActive: status } });
        return result;
    });
    const blockEmployer = (objId) => __awaiter(void 0, void 0, void 0, function* () {
        const id = new mongoose_1.Types.ObjectId(objId);
        const employer = yield employerModel_1.Employer.findById(id);
        console.log(employer, "previous week employer");
        const status = !(employer === null || employer === void 0 ? void 0 : employer.isActive);
        console.log(status, "status");
        const result = yield employerModel_1.Employer.findOneAndUpdate({ _id: id }, { $set: { isActive: status } });
        console.log(result, "updatedusr");
        return result;
    });
    const verifyEmployer = (objId) => __awaiter(void 0, void 0, void 0, function* () {
        const id = new mongoose_1.Types.ObjectId(objId);
        const result = yield employerModel_1.Employer.findOneAndUpdate({
            _id: id,
        }, {
            $set: { isVerified: true },
        });
        return result;
    });
    const getUnverifiedEmployers = () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield employerModel_1.Employer.find({ isVerified: false });
        return result;
    });
    const BasicDetailsUserEmployer = () => __awaiter(void 0, void 0, void 0, function* () {
        const UserCount = yield userModel_1.User.countDocuments({});
        const EmployerCount = yield employerModel_1.Employer.countDocuments({});
        const jobCount = yield jobModel_1.Job.countDocuments({});
        const JobApplicationCount = yield jobApplicationModel_1.JobApplication.find({
            applicationStatus: "Shortlisted"
        }).count();
        const resObj = {
            UserCount,
            EmployerCount,
            jobCount,
            JobApplicationCount,
        };
        console.log(resObj);
        return resObj;
    });
    const getEmployerStatus = () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield employerModel_1.Employer.aggregate([
            {
                $group: {
                    _id: null,
                    activeCount: {
                        $sum: { $cond: [{ $eq: ["$isActive", true] }, 1, 0] },
                    },
                    inactiveCount: {
                        $sum: { $cond: [{ $eq: ["$isActive", false] }, 1, 0] },
                    },
                    verifiedCount: {
                        $sum: { $cond: [{ $eq: ["$isVerified", true] }, 1, 0] },
                    },
                    notVerifiedCount: {
                        $sum: { $cond: [{ $eq: ["$isVerified", false] }, 1, 0] },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                },
            },
        ]);
        return result[0];
    });
    return {
        getAdminByEmail,
        getAllusers,
        getAllEmployers,
        blockUser,
        blockEmployer,
        verifyEmployer,
        getUnverifiedEmployers,
        BasicDetailsUserEmployer,
        getEmployerStatus,
        getAllBlockedUsers
    };
};
exports.adminRepositoryMongoDB = adminRepositoryMongoDB;
