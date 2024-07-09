import User from '../models/userSchema.js';
import axios from 'axios';
import asyncHandler from '../utils/asyncHandler.js';

// Set the active workout for a user
export const setUserActiveWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.body;

  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Set the active workout
  user.activeWorkoutId = workoutId;
  await user.save();

  res.status(200).json({ message: 'Active workout set successfully' });
});

// Get active workout details
export const getActiveWorkout = asyncHandler(async (req, res) => {
  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Get the activeWorkoutId from the user profile
  const activeWorkoutId = user.activeWorkoutId;
  if (!activeWorkoutId) {
    return res.status(404).json({ error: 'No active workout found' });
  }

  // Get the workout details from the JSON file
  const response = await axios.get('http://localhost:8000/hardcodedworkouts');
  // const response = await axios.get('https://eldergymbroapp.onrender.com/hardcodedworkouts');
  const workouts = response.data;

  // Find the active workout by activeWorkoutId
  const activeWorkout = workouts.find((workout) => workout.id === Number(activeWorkoutId));
  if (!activeWorkout) {
    return res.status(404).json({ error: 'Active workout does not exist' });
  }

  res.status(200).json({ activeWorkout });
});

// Add a new workout progress entry
export const addWorkoutProgress = asyncHandler(async (req, res) => {
  const { workoutId, startDate, progress } = req.body;

  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // If the user's active workout is different than the new workout, set the active workout to the new workout
  if (user.activeWorkoutId !== workoutId) {
    user.activeWorkoutId = workoutId;
    await user.save();
  }

  // Check if the workoutId is already tracked
  const isWorkoutTracked = user.progressTracking.some((entry) => entry.workoutId === workoutId);
  if (isWorkoutTracked) {
    return res.status(400).json({ error: 'Workout is already tracked' });
  }

  // Add the workout progress
  user.progressTracking.push({ workoutId, startDate, progress });
  // Save the changes
  await user.save();

  res.status(200).json({ message: 'Workout progress added successfully' });
});

// Add a new exercise progress entry (POST)
export const addExerciseProgress = asyncHandler(async (req, res) => {
  const { exerciseId, exerciseName, sets } = req.body;
  const { workoutId } = req.params;

  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Find the workout tracking entry
  const workoutTracking = user.progressTracking.find((tracking) => tracking.workoutId.toString() === workoutId);
  if (!workoutTracking) {
    return res.status(404).json({ error: 'Workout progress not found' });
  }

  // Get the current date without time for comparison
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Check if there's an entry for the current day
  let dayEntry = workoutTracking.progress.find((entry) => {
    const entryDate = new Date(entry.day);
    entryDate.setHours(0, 0, 0, 0);
    return entryDate.getTime() === currentDate.getTime();
  });

  // If no entry for today, create a new one
  if (!dayEntry) {
    dayEntry = {
      day: currentDate,
      exercisesOfTheDay: [
        {
          exerciseId: exerciseId,
          exerciseName: exerciseName,
          sets: sets,
          date: currentDate,
        },
      ],
    };
    workoutTracking.progress.push(dayEntry);
  } else {
    // Add the new exercise progress to the day's entry
    dayEntry.exercisesOfTheDay.push({ exerciseId, exerciseName, sets, date: currentDate });
  }

  console.log(req.body);

  // Save the changes
  await user.save();
  res.status(200).json({ message: 'Exercise progress added successfully' });
});

// Get workout progress for a user
export const getWorkoutProgress = asyncHandler(async (req, res) => {
  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (!user.progressTracking) {
    return res.status(404).json({ error: 'No workout progress found' });
  }

  res.status(200).json({ progressTracking: user.progressTracking });
});

// End Workout
export const endWorkout = asyncHandler(async (req, res, next) => {
  const { workoutId } = req.params;
  // Get the current date without time
  const currentDate = new Date();
  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Find the workout tracking entry
  const workoutTracking = user.progressTracking.find((tracking) => tracking.workoutId.toString() === workoutId);
  if (!workoutTracking) {
    return res.status(404).json({ error: 'Workout progress not found' });
  }

  // Set the endDate to the current date
  workoutTracking.endDate = currentDate;

  // Save the changes
  await user.save();
  res.status(200).json({ message: 'Workout has been marked as finished' });
});

// Reset progress tracking for a user
export const resetProgressTracking = asyncHandler(async (req, res, next) => {
  // Find the user by UID
  const user = await User.findById(req.uid);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  // Set ProgressTracking to an empty array
  user.progressTracking = [];
  // Save the changes
  await user.save();
  res.status(200).json({ message: 'Progress tracking reset successfully' });
});
