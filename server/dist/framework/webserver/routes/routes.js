"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userAuth_1 = __importDefault(require("./userAuth"));
const employerAuth_1 = __importDefault(require("./employerAuth"));
const employer_1 = __importDefault(require("./employer"));
const user_1 = __importDefault(require("./user"));
const jobs_1 = __importDefault(require("./jobs"));
const jobApplication_1 = __importDefault(require("./jobApplication"));
const admin_1 = __importDefault(require("./admin"));
const conversation_1 = __importDefault(require("./conversation"));
const message_1 = __importDefault(require("./message"));
const AuthenticationMiddleware_1 = __importDefault(require("../middleware/AuthenticationMiddleware"));
const routes = (app) => {
    app.use('/api/admin', (0, admin_1.default)());
    app.use('/api/user', (0, user_1.default)());
    app.use('/api/employer', (0, employer_1.default)());
    app.use('/api/user-auth', (0, userAuth_1.default)());
    app.use('/api/employer-auth', (0, employerAuth_1.default)());
    app.use('/api/job-application', AuthenticationMiddleware_1.default, (0, jobApplication_1.default)());
    app.use('/api/job', AuthenticationMiddleware_1.default, (0, jobs_1.default)());
    app.use('/api/messenger-conversation', (0, conversation_1.default)());
    app.use('/api/messenger-message', AuthenticationMiddleware_1.default, (0, message_1.default)());
};
exports.default = routes;
