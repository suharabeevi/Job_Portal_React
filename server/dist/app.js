"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const body_parser_1 = __importDefault(require("body-parser"));
const connection_1 = __importDefault(require("./framework/database/mongoDb/connection"));
const errorHandlingMiddleware_1 = __importDefault(require("./framework/webserver/middleware/errorHandlingMiddleware"));
const routes_1 = __importDefault(require("./framework/webserver/routes/routes"));
const appError_1 = __importDefault(require("./utils/appError"));
const express_2 = __importDefault(require("./framework/webserver/express"));
const server_1 = __importDefault(require("./framework/webserver/server"));
const socket_1 = __importDefault(require("./framework/websocket/socket"));
const config_1 = __importDefault(require("./config"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*"
    }
});
app.use(body_parser_1.default.json());
(0, connection_1.default)();
(0, socket_1.default)(io);
(0, express_2.default)(app);
(0, server_1.default)(server).startServer();
(0, routes_1.default)(app);
app.use(errorHandlingMiddleware_1.default);
console.log(config_1.default.PRODUCTION);
if (config_1.default.PRODUCTION === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "../../Client/my-ts-app/build")));
    app.get("*", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../../Client/my-ts-app/build/index.html"));
    });
}
app.all('*', (req, res, next) => {
    next(new appError_1.default('Not found', 404));
});
