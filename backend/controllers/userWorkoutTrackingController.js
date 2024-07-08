import User from '../models/userSchema.js';
import axios from 'axios';
import asyncHandler from '../utils/asyncHandler.js';

// Set the active workout for a user
export const setUserActiveWorkout = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // Get active workout details
export const getActiveWorkout = async (req, res) => {
  try {
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
    const workouts = response.data;

    // Find the active workout by activeWorkoutId
    const activeWorkout = workouts.find((workout) => workout.id === Number(activeWorkoutId));
    if (!activeWorkout) {
      return res.status(404).json({ error: 'Active workout does not exist' });
    }

    res.status(200).json({ activeWorkout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new workout progress entry
export const addWorkoutProgress = async (req, res) => {
  try {
    const { workoutId, startDate, progress } = req.body;
    // startDate.setHours(0, 0, 0, 0);

    // Find the user by UID
    const user = await User.findById(req.uid);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // If the user does not have an active workout, set the active workout to the new workout
    if (!user.activeWorkoutId) {
      user.activeWorkoutId = workoutId;
      await user.save();
    }
    // If the users activeWorkout is different than the new workout, set the active workout to the new workout
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new exercise progress entry (POST)
export const addExerciseProgress = async (req, res) => {
  try {
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
    }

    // Add the new exercise progress to the day's entry
    dayEntry.exercisesOfTheDay.push({ exerciseId, exerciseName, sets, date: currentDate });

    console.log(req.body);

    // Save the changes
    await user.save();
    res.status(200).json({ message: 'Exercise progress added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // Add a new set progress entry (PUT)
// export const addSetProgress = async (req, res) => {
//   try {
//     const { setId, weight, reps } = req.body;
//     const { workoutId, exerciseId } = req.params;

//     // Find the user by UID
//     const user = await User.findById(req.uid);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Find the workout tracking entry
//     const workoutTracking = user.progressTracking.find((tracking) => tracking.workoutId.toString() === workoutId);
//     if (!workoutTracking) {
//       return res.status(404).json({ error: 'Workout progress not found' });
//     }

//     // Get the current date without time for comparison
//     const currentDate = new Date();
//     currentDate.setHours(0, 0, 0, 0);

//     // Check if there's an entry for the current day
//     let dayEntry = workoutTracking.progress.find((entry) => {
//       const entryDate = new Date(entry.day);
//       entryDate.setHours(0, 0, 0, 0);
//       return entryDate.getTime() === currentDate.getTime();
//     });

//     if (!dayEntry) {
//       // If no entry for today, create a new one
//       dayEntry = { day: new Date(), exercisesOfTheDay: [] };
//       workoutTracking.progress.push(dayEntry);
//     }

//     // Find the exercise tracking entry
//     const exerciseTracking = dayEntry.exercisesOfTheDay.find(
//       (exercise) => exercise.exerciseId.toString() === exerciseId,
//     );

//     // Basic validation (example for weight, apply similarly for sets and reps)
//     if (typeof weight !== 'number' || isNaN(weight)) {
//       return res.status(400).json({ error: 'Invalid data type for weight' });
//     }

//     // Add the new exercise progress to the day's entry
//     exerciseTracking.set.push({ setId, weight, reps, date: new Date() });

//     // Save the changes
//     await user.save();
//     res.status(200).json({ message: 'Set progress added successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Get workout progress for a user
export const getWorkoutProgress = async (req, res) => {
  try {
    // Find the user by UID
    const user = await User.findById(req.uid);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.progressTracking) {
      return res.status(404).json({ error: 'No workout progress found' });
    }

    res.status(200).json({ progressTracking: user.progressTracking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//End Workout
export const endWorkout = asyncHandler(async (req, res, next) => {
  const { workoutId } = req.params;
  // Get the current date without time
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

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
