import mongoose from 'mongoose';
import { getTitle } from '../utils/karmaUtils.js';
import { getDefaultAvatar } from '../utils/profileUtils.js';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      // required: [true, 'Name is required'],
      default: 'unknown',
    },
    username: {
      type: String,
      // unique: true,
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
    age: { type: Number, default: null },
    weight: { type: Number, default: null },
    gender: { type: String, default: '', enum: ['', 'male', 'female', 'elder thing', 'blob', 'other'] },
    fitnesLevel: {
      type: String,
      // required: [true, 'Please state your current fitness level'],
      default: 'beginner',
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    workoutAim: {
      type: String,
      default: '',
      enum: ['', 'Muscle Worship', 'Fat Fight', 'Stamina Destruction', 'Cardio Crusade'],
    },
    avatar: {
      type: String,
      default: function () {
        return getDefaultAvatar(this.gender);
      },
    },
    awards: {
      level: {
        type: Number,
        default: 1,
      },
      progress: {
        type: Number,
        default: 0,
      },
      karmaPoints: {
        type: Number,
        default: 0,
      },
      title: {
        type: String,
        default: function () {
          return getTitle(this.awards.karmaPoints);
        },
      },
      lastLogin: {
        type: Date,
        default: null,
      },
    },
    progressTracking: { type: Array, default: [] },
  },
  // Timestamps
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
