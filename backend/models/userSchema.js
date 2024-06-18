import mongoose, { mongo } from 'mongoose';
import ScheduledWorkout from './scheduledWorkouts';
import bcrypt from 'bcryptjs';

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
      type: email,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },
    fitnesLevel: {
      type: String,
      required: [true, 'Please state your current fitness level'],
    },
    schedule: { ScheduledWorkout },
  },
  // Timestamps
  { timestamps: true },
);

// Before saving the new user, encrypt the password.
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.model('User', userSchema);
