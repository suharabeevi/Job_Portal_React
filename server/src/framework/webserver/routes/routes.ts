import userAuthRouter from "./userAuth";
import employerAuthRouter from "./employerAuth";
import employerRouter from "./employer";
import userRouter from "./user";
import jobRouter from "./jobs";
import adminRouter from "./admin";
import { Application } from "express";
import authenticationMiddleware from "../middleware/AuthenticationMiddleware";

const routes = (app: Application) => {
    app.use('/api/admin',adminRouter())
    app.use('/api/user', userRouter());
    app.use('/api/employer',employerRouter());
    app.use('/api/user-auth', userAuthRouter());
    app.use('/api/employer-auth',employerAuthRouter());
    app.use('/api/job', authenticationMiddleware, jobRouter());
   

}

export default routes;