"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = require("mongoose");
const jobSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "please provide the title for the job "]
    },
    description: {
        type: String,
        required: [true, "please provide the job description"]
    },
    location: {
        type: String,
        required: [true, "please give the location"]
    },
    employmentType: {
        type: String,
        required: [true, "please give the employment type"]
    },
    requirements: {
        type: Array,
        required: true
    },
    responsibilities: {
        type: Array,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    openings: {
        type: Number,
        required: [true, "please add the number of openings"]
    },
    employer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Employer',
        required: [true, 'please add employerId']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    hashedId: {
        type: String
    }
});
exports.Job = (0, mongoose_1.model)("Job", jobSchema, 'jobs');
