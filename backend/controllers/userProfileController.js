import User from '../models/userSchema.js';
import asyncHandler from '../utils/asyncHandler.js';
import { getDefaultAvatar } from '../utils/profileUtils.js';

// Verify User
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  res.json(user);
});

// Update User Profile fields
// Update Full Name
export const updateFullName = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.fullName = req.body.fullName;
  await user.save();
  res.status(200).json({ message: 'Successfully changed Full Name' });
});

// Update Age
export const updateAge = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.age = req.body.age;
  await user.save();
  res.status(200).json({ message: 'Successfully changed age' });
});

// Update Weight
export const updateWeight = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.weight = req.body.weight;
  await user.save();
  res.status(200).json({ message: 'Successfully changed weight' });
});

// Update Gender
export const updateGender = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.gender = req.body.gender;
  user.avatar = getDefaultAvatar(req.body.gender);
  await user.save();
  res.status(200).json({ message: 'Successfully changed gender and updated avatar' });
});

// Update Fitness Level
export const updateFitnessLevel = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.fitnessLevel = req.body.fitnessLevel;
  await user.save();
  res.status(200).json({ message: 'Successfully changed fitness level' });
});

// Update Workout Aim
export const updateWorkoutAim = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.workoutAim = req.body.workoutAim;
  await user.save();
  res.status(200).json({ message: 'Successfully changed workout aim' });
});

// Update Avatar
export const updateAvatar = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.avatar = req.file.path;
  await user.save();
  res.status(200).json({ avatar: user.avatar, message: 'Successfully changed avatar link' });
});

// Update Profile
export const updateProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.uid);
  user.fullName = req.body.fullName;
  user.username = req.body.username;
  user.age = req.body.age;
  user.weight = req.body.weight;
  user.gender = req.body.gender;
  user.avatar = getDefaultAvatar(req.body.gender);
  await user.save();
  res.status(200).json({ message: 'Successfully updated profile' });
});
