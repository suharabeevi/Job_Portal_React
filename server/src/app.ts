import express, { NextFunction } from 'express';
import http from 'http';
import cors from 'cors'
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import connectDB from './framework/database/mongoDb/connection';
import errorHandlingMiddleware from './framework/webserver/middleware/errorHandlingMiddleware';
import routes from './framework/webserver/routes/routes';
import AppError from './utils/appError';
import expressConfig from "./framework/webserver/express";
 import serverConfig from "./framework/webserver/server";
 import socketConfig from './framework/websocket/socket';
import configKeys from './config';
import path from 'path';
const app: express.Application = express();
const server = http.createServer(app);

app.use(cors())
// socket connection
const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });
app.use(bodyParser.json());

connectDB();
socketConfig(io);
expressConfig(app);

serverConfig(server).startServer();


// routes
routes(app);
app.use(errorHandlingMiddleware) 

console.log(configKeys.PRODUCTION, "in app.js")
if (configKeys.PRODUCTION === "production") {

  app.use(express.static(path.join(__dirname, "../../Client/my-ts-app/build")));

  app.get("*", function (req, res) {
      console.log(path.join(__dirname, "../../Client/my-ts-app/build/index.html"))
    res.sendFile(path.join(__dirname, "../../Client/my-ts-app/build/index.html"));
  });
}

app.all('*', (req,res,next:NextFunction) => {
    next(new AppError('Not found', 404));
});