import { Router } from 'express';
import * as userProfileController from '../controllers/userProfileController.js';
import * as userKarmaController from '../controllers/userKarmaController.js';
import verifyToken from '../middleware/verifyToken.js';

const userProfileRouter = Router();

userProfileRouter
  .get('/me', verifyToken, userProfileController.getUser)
  .patch('/me/karma', verifyToken, userKarmaController.updateKarma);
userProfileRouter.patch('/me/fullname', verifyToken, userProfileController.updateFullName);
userProfileRouter.patch('/me/age', verifyToken, userProfileController.updateAge);
userProfileRouter.patch('/me/weight', verifyToken, userProfileController.updateWeight);
userProfileRouter.patch('/me/gender', verifyToken, userProfileController.updateGender);
userProfileRouter.patch('/me/fitnessLevel', verifyToken, userProfileController.updateFitnessLevel);
userProfileRouter.patch('/me/workoutAim', verifyToken, userProfileController.updateWorkoutAim);
userProfileRouter.patch('/me/avatar', verifyToken, userProfileController.updateAvatar);
userProfileRouter.patch('/me/profileupdate', verifyToken, userProfileController.updateProfile);

export default userProfileRouter;
