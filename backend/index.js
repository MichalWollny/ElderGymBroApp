import express from 'express';
import exercises from './data/exercises.json' assert { type: 'json' };
// import './db/server.js';
import cors from 'cors';
import { errorHandler } from './middleware/ErrorHandler.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/exercises', (req, res) => {
  res.json(exercises);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
