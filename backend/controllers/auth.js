import User from '../models/userSchema.js';
import { getTitle, karmaPointsPerLevel, calculateLevel, calculateProgressToNextLevel } from '../utils/karmaUtils.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER PART
export const signUp = asyncHandler(async (req, res, next) => {
  const { fullName, username, email, password, age, weight, gender, fitnessLevel, workoutAim, awards } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new ErrorResponse('An account with this Email already exist', 409);
  const existingUser1 = await User.findOne({ username });
  if (existingUser1) throw new ErrorResponse('An account with this Username already exist', 409);

  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    fullName,
    username,
    email,
    password: hash,
    age,
    weight,
    gender,
    fitnessLevel,
    workoutAim,
    awards,
  });
  const token = jwt.sign({ uid: newUser._id }, process.env.JWT_SECRET);
  res.status(201).send({ token });
});

// LOGIN PART
// karma Points on first login come from the imports from karmaUtils.js
// Helper function to check if two dates are the same day
const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
// Login
export const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).select('+password');
  if (!existingUser) throw new ErrorResponse('Email does not exist', 404);

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) throw new ErrorResponse('Password is incorrect', 401);

  const now = new Date();
  let firstLoginOfTheDay = false;
  // Default state is false

  if (!existingUser.awards.lastLogin || !isSameDay(existingUser.awards.lastLogin, now)) {
    existingUser.awards.karmaPoints += 50;
    // Award additional karma points for first login of the day (Yay!)
    firstLoginOfTheDay = true;
    const newLevel = calculateLevel(existingUser.awards.karmaPoints);
    if (newLevel !== existingUser.awards.level) {
      existingUser.awards.level = newLevel;
      existingUser.awards.progress = 0; // Reset progress after leveling up
    } else {
      // If level remains the same, only update progress
      existingUser.awards.progress = calculateProgressToNextLevel(existingUser.awards.karmaPoints);
    }
    // console.log(req.body);

    existingUser.awards.title = getTitle(existingUser.awards.karmaPoints);
  }

  existingUser.awards.lastLogin = now;
  // Changing the Last Login date to the current date

  await existingUser.save();
  // Save the updated user

  const token = jwt.sign({ uid: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: '120m',
  });
  // res.json({ token });
  res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none', secure: true }); // 24hrs
  res.send({ status: 'success' });
});

// VERIFY USER PART
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  res.json(user);
});

// LOGOUT PART
export const logout = asyncHandler(async (req, res, next) => {
  // console.log('Logging out user');
  res.clearCookie('token', { httpOnly: true, sameSite: 'none', secure: true });
  // console.log('Cookie cleared');
  res.send({ status: 'success' });
});
