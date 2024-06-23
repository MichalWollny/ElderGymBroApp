import User from '../models/userSchema.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER
export const signUp = asyncHandler(async (req, res, next) => {
  const { fullName, username, email, password, age, weight, gender, fitnessLevel, workoutAim } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new ErrorResponse('An account with this Email already exist', 409);

  const existingUser1 = await User.findOne({ username });
  if (existingUser1) throw new ErrorResponse('An account with this Username already exist', 409);
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      personalData: {
        fullName,
        username,
        age,
        weight,
        gender,
        fitnessLevel,
        workoutAim,
      },
      loginData: {
        email,
        password: hash,
      },
    });
  } catch (err) {
    console.error(err);
    throw new ErrorResponse('Error hashing password', 500);
  }
  const token = jwt.sign({ uid: newUser._id }, process.env.JWT_SECRET);
  res.status(201).send({ token });
});

// LOGIN
export const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ 'loginData.email': email }).select('+loginData.password');
  if (!existingUser) throw new ErrorResponse('Email does not exist', 404);

  const match = await bcrypt.compare(password, existingUser.loginData.password);
  if (!match) throw new ErrorResponse('Password is incorrect', 401);

  const token = jwt.sign({ uid: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: '30m',
  });
  // res.json({ token });
  res.cookie('token', token, { maxAge: 1800000 }); // 30mn
  res.send({ status: 'success' });
});

// Logout....
export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie('token');
  res.send({ status: 'success' });
});
