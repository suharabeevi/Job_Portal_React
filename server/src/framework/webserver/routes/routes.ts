import userAuthRouter from "./userAuth";
import employerAuthRouter from "./employerAuth";
// import jobRouter from "./jobs";
import { Application } from "express";
//  import userRouter from "./user";
// import authenticationMiddleware from "../middleware/authenticationMiddleware";
// import employerRouter from "./employer";
// import jobApplicationRouter from "./jobApplication";
// import conversationRouter from "./conversation";
// import messageRouter  from "./message";

const routes = (app: Application) => {
    // app.use('/api/user', userRouter());
    app.use('/api/user-auth', userAuthRouter());
    app.use('/api/employer-auth',employerAuthRouter());
    
}

export default routes;