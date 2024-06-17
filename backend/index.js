import express from "express";
import { data } from "./data/exercises.json";
import "./db/server.js";

const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`ExerciseApp listening on port ${port}`);
});
