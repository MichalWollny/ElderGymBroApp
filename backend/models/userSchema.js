import mongoose from 'mongoose';
import { getTitle } from '../utils/karmaUtils.js';
import { getDefaultAvatar } from '../utils/profileUtils.js';
import { userWorkoutTrackingSchema } from './fitnessSchema.js';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      default: 'Cultist',
    },
    username: {
      type: String,
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
    fitnessLevel: {
      type: String,
      default: '',
      enum: ['', 'beginner', 'intermediate', 'advanced'],
    },
    workoutAim: {
      type: String,
      default: '',
      enum: [
        '',
        'Grow Your Muscles',
        'Build Your Stamina',
        'Maximize Your Strength',
        'Cardio Crusade',
        'Achieve Weight Loss',
      ],
    },

    //for now avatar will be an url, image upload will be implemented later (if at all...)
    avatar: {
      type: String,
      default: function () {
        return getDefaultAvatar(this.gender);
      },
    },

    // awards object will store the gamefication elements
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
      // achievements: [
      //   { id: 1, name: 'Beginner Gains', requirements: 'First Workout completed', earned: false },
      //   { id: 2, name: 'Firstworkout ', earned: false },
      //   {
      //     id: 3,
      //     name: 'Training at night',
      //     requirements: 'Start a workout between 10 pm and 2 am',
      //     earned: false,
      //   },
      //   { id: 4, name: 'Chestday', requirements: 'Chest workout on Mondays', earned: false },
      //   {
      //     id: 5,
      //     name: 'Weekend Workout Cultist',

      //     requirements: 'Finish your Workout on Saturday/Sunday',
      //     earned: false,
      //   },
      //   {
      //     id: 6,
      //     name: 'First Incantation of Fitness',

      //     requirements: 'Create your first personalized workout plan',
      //     earned: false,
      //   },
      // ],
      lastLogin: {
        type: Date,
        default: null,
      },
    },
    progressTracking: { type: [userWorkoutTrackingSchema], default: [] },

    // activeWorkoutID should help us render the active workout on the front end side
    activeWorkoutId: { type: String, default: '1' },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
