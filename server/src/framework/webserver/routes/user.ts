import express from 'express';
import userController from '../../../adapters/controllers/userControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepository';
import { UserRepositoryMongoDB } from '../../database/mongoDb/repositories/userRepositoryMongoDB';
import { User } from '../../database/mongoDb/models/userModel';
import authenticationMiddleware from '../middleware/AuthenticationMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';
import { upload } from '../middleware/cloudinary';

const userMiddleware = roleMiddleware('user');

const userRouter = ()=> {
    const route = express.Router();

    const controller = userController(
        userDbRepository,
        UserRepositoryMongoDB,
        User
    );
    route.get('/user-data',authenticationMiddleware, userMiddleware,controller.getUserDataById);
    route.put('/update-user',authenticationMiddleware, userMiddleware,upload, controller.updateTheUser);
     route.put('/update-resume',authenticationMiddleware, userMiddleware,upload, controller.updateTheResume);
      route.delete('/delete-resume' ,authenticationMiddleware, userMiddleware, controller.userDeleteResume);
    route.get('/user-data/:userId', controller.getUserDataByIdParam);

    return route;
}

export default userRouter;  