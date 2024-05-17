"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = __importDefault(require("../../../utils/appError"));
const httpStatus_1 = require("../../../types/httpStatus");
const roleMiddleware = (role) => {
    return (req, res, next) => {
        const customReq = req;
        if (customReq.role !== role) {
            throw new appError_1.default("Unauthorized user", httpStatus_1.HttpStatus.UNAUTHORIZED);
        }
        next();
    };
};
exports.default = roleMiddleware;
