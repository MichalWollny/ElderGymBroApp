import mongoose from 'mongoose';

// this would be used by the react-big-calendar for the user-planned workout and would also give a history of past workouts

const scheduledWorkoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // for the start-end date I have to check if I can just use 'single day events, without exact time - only the date
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  allDay: {
    type: String,
    default: 'true',
  },
});

const ScheduledWorkout = mongoose.model('ScheduledWorkout', scheduledWorkoutSchema);

export default ScheduledWorkout;
