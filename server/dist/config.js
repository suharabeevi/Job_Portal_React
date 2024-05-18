"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const configKeys = {
    JWT_KEY: process.env.JWT_SECRET,
    MONGO_DB_URL: process.env.DATABASE,
    DB_NAME: process.env.DB_NAME,
    PORT: process.env.ORIGIN_PORT,
    APP_SECRET: process.env.APP_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NODE_MAIL_USER: process.env.NODE_MAIL_USER_EMAIL,
    NODE_MAIL_PASS: process.env.EMAIL_PASS,
    ORIGIN_PORT: process.env.ORIGIN_PORT,
    PRODUCTION: process.env.PRODUCTION,
};
exports.default = configKeys;
