import express from 'express';
import { jobApplicationDbRepository } from '../../../application/repositories/jobApplicationDbRepository';
import { JobApplicationRepositoryMongoDB } from '../../database/mongoDb/repositories/jobApplicationRepositoryMongoDB';
import { JobApplication } from '../../database/mongoDb/models/jobApplicationModel';
import jobApplicationController from '../../../adapters/controllers/jobApplicationController';
import roleMiddleware from "../middleware/roleMiddleware"
const userMiddleware = roleMiddleware('user');
const employerMiddleware = roleMiddleware('employer');

const jobApplicationRouter = () => {
    const route = express.Router();

    const controller = jobApplicationController(
        jobApplicationDbRepository,
        JobApplicationRepositoryMongoDB,
        JobApplication
    );
    
    route.post('/create-application',userMiddleware, controller.applyNewJob);
    route.get('/is-applied', controller.existingApplicant);
    return route
}
export default jobApplicationRouter;