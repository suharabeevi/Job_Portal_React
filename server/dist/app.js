"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./framework/database/mongoDb/connection"));
const errorHandlingMiddleware_1 = __importDefault(require("./framework/webserver/middleware/errorHandlingMiddleware"));
const appError_1 = __importDefault(require("./utils/appError"));
const express_2 = __importDefault(require("./framework/webserver/express"));
const server_1 = __importDefault(require("./framework/webserver/server"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
(0, connection_1.default)();
(0, express_2.default)(app);
(0, server_1.default)(server).startServer();
app.use(errorHandlingMiddleware_1.default);
app.all('*', (req, res, next) => {
    next(new appError_1.default('Not found', 404));
});
