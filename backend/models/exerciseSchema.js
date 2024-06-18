import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  equipment: { type: String, default: null },
  primaryMuscles: { type: String, required: true },
  secondaryMuscles: { type: Array, default: null },
  level: { type: String, required: true },
  category: { type: String, required: true },
  reps: { type: Number, required: true },
  instructions: { type: String, required: true },
  // we can add/remove attributes as needed
});

const ScheduledWorkout = mongoose.model('ExerciseSchema', exerciseSchema);

export default ExerciseSchema;
