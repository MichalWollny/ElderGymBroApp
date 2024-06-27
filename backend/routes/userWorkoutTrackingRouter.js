import { Router } from 'express';
import {
  addWorkoutProgress,
  updateWorkoutProgress,
  getWorkoutProgress,
} from '../controllers/userWorkoutTrackingController.js';
import verifyToken from '../middleware/verifyToken.js';

const userWorkoutTrackingRouter = Router();

// Set active workout for a user
userWorkoutTrackingRouter.patch('/setActiveWorkout', verifyToken, setActiveWorkout);

// Add workout progress
userWorkoutTrackingRouter.post('/addWorkoutProgress', verifyToken, addWorkoutProgress);

// Update workout progress
userWorkoutTrackingRouter.put('/updateWorkoutProgress/:userId/:workoutId', verifyToken, updateWorkoutProgress);

// Get workout progress
userWorkoutTrackingRouter.get('/getWorkoutProgress/:userId', verifyToken, getWorkoutProgress);

// Get active workout for a user
userWorkoutTrackingRouter.get('/getActiveWorkout', verifyToken, getActiveWorkout);

// Get active workout and workout progress for a user
userWorkoutTrackingRouter.get('/getActiveWorkoutAndProgress', verifyToken, getActiveWorkoutAndProgress);

export default userWorkoutTrackingRouter;
