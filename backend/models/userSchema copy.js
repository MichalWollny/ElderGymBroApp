import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    personalData: {
      fullName: {
        type: String,
        required: [true, 'Full name is required'],
      },
      userName: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
      },
      age: {
        type: Number,
        required: [true, 'Age is required'],
      },
      weight: {
        type: Number,
        required: [true, 'Weight is required'],
      },
      gender: {
        type: String,
        enum: ['male', 'female', 'elder thing', 'blob', 'other'],
        // required: [true, 'Gender is required'],
      },
      workoutAim: {
        type: String,
        enum: ['Muscle Worship', 'Fat Fight', 'Stamina Destruction', 'Cardio Crusade'],
        default: '',
      },
    },
    loginData: {
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
    },
    awards: {
      karmaPoints: {
        type: Number,
        default: 0,
      },
      title: {
        type: String,
        default: 'Cannon Fodder Cultist',
      },
    },
    workouts: [
      {
        workoutId: { type: String, required: true },
        // reference to the hardcoded workout ID
        customWeights: { type: Object },
        // store custom weights for each exercise in the workout
        startDate: { type: Date },
        // date the user started the workout
        completed: { type: Boolean, default: false },
        // whether the user completed the workout
        exercises: [
          {
            exerciseName: { type: String, required: true },
            weight: { type: Number, required: true },
            sets: { type: Number, required: true },
            reps: { type: Number, required: true },
          },
        ],
      },
    ],
    default: [],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', userSchema);
