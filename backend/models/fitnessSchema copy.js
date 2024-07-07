import mongoose from 'mongoose';

// Define the schema for exercises performed on a specific day
const exerciseProgressSchema = new mongoose.Schema({
  day: { type: Date, default: () => new Date(new Date().setHours(0, 0, 0, 0)) },
  exercisesOfTheDay: [exerciseTrackingSchema],
});

// User workout tracking schema to track workouts
const userWorkoutTrackingSchema = new mongoose.Schema({
  workoutId: Number,
  startDate: { type: Date, default: () => new Date(new Date().setHours(0, 0, 0, 0)) },
  endDate: { type: Date, type: Date, default: () => new Date(new Date().setHours(0, 0, 0, 0)) },
  progress: [exerciseProgressSchema],
});

const Workout = mongoose.model('Workout', workoutSchema);
const ExerciseProgress = mongoose.model('ExerciseProgress', exerciseProgressSchema);

export { Workout, ExerciseProgress, exerciseProgressSchema, userWorkoutTrackingSchema };

//IRRELEVANT CONTENT BELOW MAYBE FOR FUTURE UPDATES

// // // // // // // // // // // // // // // // // // // // // // // // // // //

// Exercise schema to define individual exercises
const exerciseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  force: String,
  level: String,
  mechanic: String,
  equipment: String,
  primaryMuscles: [String],
  secondaryMuscles: [String],
  instructions: [String],
  category: String,
});

// Muscle group schema to define exercises within muscle groups
const muscleGroupSchema = new mongoose.Schema({
  group: String,
  exercises: [{ name: String, sets: String, reps: String }],
});

// Split schema to define workout days
const splitSchema = new mongoose.Schema({
  day: String,
  muscleGroups: [muscleGroupSchema],
});

// Main workout schema
const workoutSchema = new mongoose.Schema({
  id: Number,
  name: String,
  aim: String,
  system: String,
  level: String,
  frequency: String,
  duration: String,
  planDuration: String,
  breakDuration: String,
  split: Boolean,
  tips: [String],
  exercises: [exerciseSchema],
  splits: [splitSchema],
});

// Exercise progress schema to track individual exercise performance
const exerciseTrackingSchema = new mongoose.Schema({
  exerciseId: { type: Number, default: 0 },
  weight: { type: Number, default: 0 },
  sets: { type: Number, default: 0 },
  reps: { type: Number, default: 0 },
  date: { type: Date, type: Date, default: () => new Date(new Date().setHours(0, 0, 0, 0)) },
});
