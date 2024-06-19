import { Router } from 'express';
import * as workoutPlanController from '../controllers/workoutPlan.js';
import verifyToken from '../middleware/verifyToken.js';

const workoutPlansRouter = Router();

workoutPlansRouter
  .route('/')
  .get(workoutPlanController.getAllWorkouts)
  .post(verifyToken, workoutPlanController.createWorkoutPlan);

workoutPlansRouter
  .route('/:id')
  .get(workoutPlanController.getSingleWorkout)
  .delete(verifyToken, postController.deleteWorkoutPlan);

export default workoutPlansRouter;
