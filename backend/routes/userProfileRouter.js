import { Router } from 'express';
import * as userProfileController from '../controllers/userProfile.js';
import verifyToken from '../middleware/verifyToken.js';

const userProfileRouter = Router();

userProfileRouter.get('/me', verifyToken, userProfileController.getUser);

export default userProfileRouter;
