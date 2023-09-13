import express, { NextFunction } from 'express';
import http from 'http';
import cors from 'cors'
import bodyParser from 'body-parser';
import connectDB from './framework/database/mongoDb/connection';
import errorHandlingMiddleware from './framework/webserver/middleware/errorHandlingMiddleware';
import routes from './framework/webserver/routes/routes';
import AppError from './utils/appError';
import expressConfig from "./framework/webserver/express";
 import serverConfig from "./framework/webserver/server";
import configKeys from './config';

const app: express.Application = express();
const server = http.createServer(app);

app.use(cors())
app.use(bodyParser.json());

connectDB();

expressConfig(app);

serverConfig(server).startServer();


// routes
routes(app);
app.use(errorHandlingMiddleware) 

app.all('*', (req,res,next:NextFunction) => {
    next(new AppError('Not found', 404));
});