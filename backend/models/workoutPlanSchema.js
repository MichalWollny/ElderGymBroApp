import mongoose from 'mongoose';
import ExerciseSchema from './exerciseSchema';

// trying to put it into a separate file

// const exerciseSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   equipment: { type: String, default: null },
//   primaryMuscles: { type: String, required: true },
//   secondaryMuscles: { type: Array, default: null },
//   level: { type: String, required: true },
//   category: { type: String, required: true },
//   reps: { type: Number, required: true },
//   instructions: { type: String, required: true },
//   // we can add/remove attributes as needed
// });

const workoutPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  exercises: [{ type: ExerciseSchema, default: [], required: true, min: 3, max: 10 }],
  // we can add other attributes as needed
});

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

export default WorkoutPlan;
