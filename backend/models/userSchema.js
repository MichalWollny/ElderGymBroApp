import mongoose, { mongo } from 'mongoose';
import ScheduledWorkout from './scheduledWorkouts.js';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Lastname is required'],
    },
    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },
    age: { type: Number, required: [true, 'Age is required'] },
    fitnessLevel: {
      type: String,
      required: [true, 'Please state your current fitness level'],
    },
    workoutAim: { type: String, required: [true, 'Please state what your workout aim is'] },
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'ScheduledWorkout', default: [] },
  },
  // Timestamps
  { timestamps: true },
);

// // Before saving the new user, encrypt the password.
// userSchema.pre('save', async function (next) {
//   try {
//     if (!this.isModified('password')) return next();
//     const hashedPassword = await bcrypt.hash(this.password, 12);
//     this.password = hashedPassword;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

export default mongoose.model('User', userSchema);
