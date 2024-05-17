"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.JobEntity = void 0;
const crypto = __importStar(require("crypto"));
class JobEntity {
    constructor(model) {
        this.model = model;
    }
    createJob(job) {
        return __awaiter(this, void 0, void 0, function* () {
            const newJob = yield this.model.create(job);
            const hash = crypto.createHash('sha256');
            hash.update(newJob._id.toString());
            const hashedId = hash.digest('hex').slice(0, 6);
            newJob.hashedId = hashedId;
            console.log(newJob, "creacted newwwwwwwwwwwww job");
            yield newJob.save();
            return newJob;
        });
    }
    updateJob(jobId, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingJob = yield this.model.findById(jobId);
            if (!existingJob) {
                return null;
            }
            Object.assign(existingJob, updates);
            const updatedJob = yield existingJob.save();
            return updatedJob;
        });
    }
    deleteJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.model.findById(jobId);
            if (!job)
                throw new Error("job not found");
            yield this.model.findByIdAndDelete(jobId);
        });
    }
    getJobByEmployer(employerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const jobs = yield this.model.find({ employer: employerId });
            return jobs;
        });
    }
    getAllJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            const allJobs = yield this.model.find();
            return allJobs;
        });
    }
    getJobById(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const jobData = yield this.model
                .findById(Id)
                .populate("employer", "companyName email")
                .exec();
            return jobData;
        });
    }
    titleLocationSalary(field) {
        return __awaiter(this, void 0, void 0, function* () {
            const distinctValues = yield this.model.distinct(field);
            return distinctValues;
        });
    }
    filterJob(title, location, salary) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = {};
            if (title) {
                filter.title = { $regex: new RegExp(title, "i") };
            }
            if (location) {
                filter.location = { $regex: new RegExp(location, "i") };
            }
            if (salary) {
                filter.salary = salary;
            }
            const jobs = yield this.model.find(filter);
            return jobs;
        });
    }
}
exports.JobEntity = JobEntity;
