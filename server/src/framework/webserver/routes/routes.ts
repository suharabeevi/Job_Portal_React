import userAuthRouter from "./userAuth";
import employerAuthRouter from "./employerAuth";

import { Application } from "express";


const routes = (app: Application) => {
    app.use('/api/user-auth', userAuthRouter());
    app.use('/api/employer-auth',employerAuthRouter());
    
}

export default routes;