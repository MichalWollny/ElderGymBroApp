import WorkoutPlan from '../models/workoutPlanSchema.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllWorkouts = asyncHandler(async (req, res, next) => {
  const workouts = await WorkoutPlan.find().populate('userId');
  res.json(workouts);
});

export const getSingleWorkout = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const workout = await WorkoutPlan.findById(id).populate('userId');
  if (!workout) throw new ErrorResponse(`Workout ${id} does not exist`, 404);
  res.send(workout);
});

export const createWorkoutPlan = asyncHandler(async (req, res, next) => {
  const { body, uid } = req;

  const newWorkout = await WorkoutPlan.create({ ...body, userId: uid });
  const populatedWorkoutPlan = await WorkoutPlan.findById(newWorkout._id).populate('userId');
  res.status(201).json(populatedWorkoutPlan);
});

// export const updatePost = asyncHandler(async (req, res, next) => {
//   const {
//     body,
//     params: { id },
//     uid,
//   } = req;

//   const found = await Post.findById(id);
//   if (!found) throw new ErrorResponse(`Post ${id} does not exist`, 404);

//   if (uid !== found.author.toString()) throw new ErrorResponse('You have no permission to update this post', 401);

//   const updatedPost = await Post.findByIdAndUpdate(id, body, {
//     new: true,
//   }).populate('author');
//   res.json(updatedPost);
// });

export const deleteWorkoutPlan = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id },
    uid,
  } = req;

  const found = await WorkoutPlan.findById(id);
  if (!found) throw new ErrorResponse(`Workout ${id} does not exist`, 404);

  if (uid !== found.author.toString()) throw new ErrorResponse('You have no permission to delete this workout', 401);

  await WorkoutPlan.findByIdAndDelete(id, body, { new: true }).populate('userId');
  res.json({ success: `Workout ${id} was deleted` });
});
