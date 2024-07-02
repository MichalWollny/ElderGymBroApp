import { Router } from 'express';
import {
  setUserActiveWorkout,
  addWorkoutProgress,
  updateWorkoutProgress,
  getWorkoutProgress,
  getActiveWorkout,
  getActiveWorkoutAndProgress,
  resetProgressTracking,
} from '../controllers/userWorkoutTrackingController.js';
import verifyToken from '../middleware/verifyToken.js';

const userWorkoutTrackingRouter = Router();

// Set active workout for a user
userWorkoutTrackingRouter.patch('/setActiveWorkout', verifyToken, setUserActiveWorkout);

// Add workout progress
userWorkoutTrackingRouter.post('/addWorkoutProgress', verifyToken, addWorkoutProgress);

// Update workout progress
userWorkoutTrackingRouter.put('/updateWorkoutProgress/:workoutId', verifyToken, updateWorkoutProgress);

// Get workout progress
userWorkoutTrackingRouter.get('/getWorkoutProgress', verifyToken, getWorkoutProgress);

// Get active workout for a user
userWorkoutTrackingRouter.get('/getActiveWorkout', verifyToken, getActiveWorkout);

// Get active workout and workout progress for a user
userWorkoutTrackingRouter.get('/getActiveWorkoutAndProgress', verifyToken, getActiveWorkoutAndProgress);

// Reset Workout Progress
userWorkoutTrackingRouter.patch('/resetWorkoutProgress', verifyToken, resetProgressTracking);

export default userWorkoutTrackingRouter;
