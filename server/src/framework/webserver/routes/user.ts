import express from 'express';
import userController from '../../../adapters/controllers/userControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepository';
import { UserRepositoryMongoDB } from '../../database/mongoDb/repositories/userRepositoryMongoDB';
import { User } from '../../database/mongoDb/models/userModel';
import authenticationMiddleware from '../middleware/AuthenticationMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';
const userMiddleware = roleMiddleware('user');

const userRouter = ()=> {
    const route = express.Router();

    const controller = userController(
        userDbRepository,
        UserRepositoryMongoDB,
        User
    );
    route.get('/user-data',authenticationMiddleware, userMiddleware, controller.getUserDataById);
    route.get('/user-data/:userId', controller.getUserDataByIdParam);

    return route;
}

export default userRouter;  