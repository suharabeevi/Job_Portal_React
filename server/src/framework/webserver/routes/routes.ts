import userAuthRouter from "./userAuth";
import employerAuthRouter from "./employerAuth";
import userRouter from "./user";
import { Application } from "express";


const routes = (app: Application) => {
    app.use('/api/user', userRouter());
    app.use('/api/user-auth', userAuthRouter());
    app.use('/api/employer-auth',employerAuthRouter());
}

export default routes;