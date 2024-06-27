import User from '../models/userSchema.js';
import axios from 'axios';

// Set the active workout for a user
export const setUserActiveWorkout = async (req, res) => {
  try {
    const { userId, workoutId } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Set the active workout
    user.activeWorkoutId = workoutId;
    await user.save();

    res.status(200).json({ message: 'Active workout set successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get active workout details
export const getActiveWorkout = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const activeWorkoutId = user.activeWorkoutId;
    if (!activeWorkoutId) {
      return res.status(404).json({ error: 'No active workout found' });
    }

    // Fetch the workout details from the JSON file
    const response = await axios.get('http://localhost:5173/hardcodedworkouts');
    const workouts = response.data;

    // Find the active workout by ID
    const activeWorkout = workouts.find((workout) => workout.id === Number(activeWorkoutId));
    if (!activeWorkout) {
      return res.status(404).json({ error: 'Active workout not found' });
    }

    res.status(200).json({ activeWorkout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new workout progress entry
export const addWorkoutProgress = async (req, res) => {
  try {
    const { userId, workoutId, startDate, progress } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add the workout progress
    user.progressTracking.push({ workoutId, startDate, progress });
    await user.save();

    res.status(200).json({ message: 'Workout progress added successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update workout progress entry
export const updateWorkoutProgress = async (req, res) => {
  try {
    const { userId, workoutId } = req.params;
    const { progress } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the workout tracking entry
    const workoutTracking = user.progressTracking.find((tracking) => tracking.workoutId === workoutId);
    if (!workoutTracking) {
      return res.status(404).json({ error: 'Workout progress not found' });
    }

    // Update the progress
    workoutTracking.progress.push(...progress);
    await user.save();

    res.status(200).json({ message: 'Workout progress updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get workout progress for a user
export const getWorkoutProgress = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ progressTracking: user.progressTracking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get active workout details and workout progress (COMBINED)
export const getActiveWorkoutAndProgress = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const activeWorkoutId = user.activeWorkoutId;
    if (!activeWorkoutId) {
      return res.status(404).json({ error: 'No active workout found' });
    }

    // Fetch the workout details from the JSON file
    const response = await axios.get('http://localhost:5173/hardcodedworkouts');
    const workouts = response.data;

    // Find the active workout by ID
    const activeWorkout = workouts.find((workout) => workout.id === Number(activeWorkoutId));
    if (!activeWorkout) {
      return res.status(404).json({ error: 'Active workout not found' });
    }

    // Retrieve the workout progress for the active workout
    const workoutProgress = user.progressTracking.find((tracking) => tracking.workoutId === activeWorkoutId);

    res.status(200).json({ activeWorkout, workoutProgress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
