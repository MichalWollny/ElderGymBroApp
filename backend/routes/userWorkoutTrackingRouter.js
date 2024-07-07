import { Router } from 'express';
import {
  setUserActiveWorkout,
  addWorkoutProgress,
  addExerciseProgress,
  // addSetProgress,
  // updateWorkoutProgress,
  getWorkoutProgress,
  getActiveWorkout,
  endWorkout,
  resetProgressTracking,
} from '../controllers/userWorkoutTrackingController.js';
import verifyToken from '../middleware/verifyToken.js';

const userWorkoutTrackingRouter = Router();

userWorkoutTrackingRouter
  // Set active workout for a user
  .patch('/setActiveWorkout', verifyToken, setUserActiveWorkout)
  // Add workout progress
  .post('/addWorkoutProgress', verifyToken, addWorkoutProgress);

userWorkoutTrackingRouter
  // Add exercise progress
  .post('/addExerciseProgress/:workoutId/:exerciseId', verifyToken, addExerciseProgress);

// userWorkoutTrackingRouter.post('/addSetProgress/:workoutId/:exerciseId', verifyToken, addSetProgress);

// Update workout progress
// .put('/updateWorkoutProgress/:workoutId', verifyToken, updateWorkoutProgress); (old)

// Get workout progress
userWorkoutTrackingRouter.get('/getWorkoutProgress', verifyToken, getWorkoutProgress);

// Get active workout for a user
userWorkoutTrackingRouter.get('/getActiveWorkout', verifyToken, getActiveWorkout);

// End workout for a user
userWorkoutTrackingRouter.patch('/endWorkout/:workoutId', verifyToken, endWorkout);

// Reset Workout Progress
userWorkoutTrackingRouter.patch('/resetWorkoutProgress', verifyToken, resetProgressTracking);

export default userWorkoutTrackingRouter;
