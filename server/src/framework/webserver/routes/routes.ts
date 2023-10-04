import userAuthRouter from "./userAuth";
import employerAuthRouter from "./employerAuth";
import employerRouter from "./employer";
import userRouter from "./user";
import jobRouter from "./jobs";
import jobApplicationRouter from "./jobApplication";
import adminRouter from "./admin";
import { Application } from "express";
import conversationRouter from "./conversation";
import messageRouter from "./message";
import authenticationMiddleware from "../middleware/AuthenticationMiddleware";

const routes = (app: Application) => {
    app.use('/api/admin',adminRouter())
    app.use('/api/user', userRouter());
    app.use('/api/employer',employerRouter());
    app.use('/api/user-auth', userAuthRouter());
    app.use('/api/employer-auth',employerAuthRouter());
    app.use('/api/job-application',authenticationMiddleware,jobApplicationRouter());
    app.use('/api/job', authenticationMiddleware, jobRouter());
    app.use('/api/messenger-conversation',conversationRouter());
    app.use('/api/messenger-message', authenticationMiddleware, messageRouter());
}

export default routes;