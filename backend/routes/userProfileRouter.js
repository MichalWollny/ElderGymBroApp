import { Router } from 'express';
import * as userProfileController from '../controllers/userProfile.js';
import * as userKarmaController from '../controllers/userKarmaController.js';
import verifyToken from '../middleware/verifyToken.js';

const userProfileRouter = Router();

userProfileRouter
  .get('/me', verifyToken, userProfileController.getUser)
  .patch('/me/karma', verifyToken, userKarmaController.updateKarma);

export default userProfileRouter;
