import User from '../models/userSchema.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER PART
export const signUp = asyncHandler(async (req, res, next) => {
  /*
    Check if user exist(email) [X]
        - If user exists, return an Error [X]
        - If user does not exist:
            - Secure the password using bcrypt [X]
            - Store the user in DB [X]
            - Sign a token []
            - Return the token []    
*/
  const { fullName, username, email, password, age, weight, gender, fitnesLevel, workoutAim, awards } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new ErrorResponse('An account with this Email already exist', 409);

  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    fullName,
    username,
    email,
    password: hash,
    age,
    weight,
    gender,
    fitnesLevel,
    workoutAim,
    awards,
  });
  const token = jwt.sign({ uid: newUser._id }, process.env.JWT_SECRET);
  res.status(201).send({ token });
});

// LOGIN PART

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
    // Award additional karma points for first login of the day
    firstLoginOfTheDay = true;
  }

  existingUser.awards.lastLogin = now;
  // Changing the Last Login date to the current date

  await existingUser.save();
  // Save the updated user

  const token = jwt.sign({ uid: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: '30m',
  });
  // res.json({ token });
  res.cookie('token', token, { maxAge: 1800000 }); // 30mn
  res.send({ status: 'success' });
});

// VERIFY USER PART
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  res.json(user);
});

// LOGOUT PART
export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie('token');
  res.send({ status: 'success' });
});
