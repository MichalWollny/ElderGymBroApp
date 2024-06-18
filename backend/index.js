import express from 'express';
import exercises from './data/exercises.json' assert { type: 'json' };
import './db/server.js';
import { errorHandler } from './middleware/ErrorHandler.js';
import authRouter from './routes/authRouter.js';
// import postsRouter from './routes/postsRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser()); // cookie-parser

// ROUTES
app.use('/auth', authRouter);
app.get('/exercises', (req, res) => {
  res.json(exercises);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
