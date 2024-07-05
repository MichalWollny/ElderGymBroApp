import express from 'express';
import exercises from './data/exercises.json' assert { type: 'json' };
import hardcodedworkouts from './data/hardcodedWorkouts.json' assert { type: 'json' };
import './db/server.js';
import { errorHandler } from './middleware/ErrorHandler.js';
import authRouter from './routes/authRouter.js';
import userProfileRouter from './routes/userProfileRouter.js';
import userWorkoutTrackingRouter from './routes/userWorkoutTrackingRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: ['https://localhost:5173', 'https://eldergymbro.netlify.app/'], // Specify the exact origin
    credentials: true, // Allow credentials
  }),
);
app.use(cookieParser()); // cookie-parser

// ROUTES
app.use('/auth', authRouter);
app.use('/profile', userProfileRouter);
app.use('/me/workouttracking', userWorkoutTrackingRouter);

// Data ROUTES
app.get('/exercises', (req, res) => {
  res.json(exercises);
});
app.get('/hardcodedworkouts', (req, res) => {
  res.json(hardcodedworkouts);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
