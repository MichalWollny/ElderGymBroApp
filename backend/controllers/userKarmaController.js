import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/userSchema.js';
import { getTitle, karmaPointsPerLevel, calculateLevel, calculateProgressToNextLevel } from '../utils/karmaUtils.js';

// Update Karma Points and Level

export const updateKarmaFunction = async (req, res, next) => {
  const userId = req.uid;

  if (!req.body.awards || typeof req.body.awards.karmaPoints.$inc !== 'number') {
    throw new ErrorResponse('Invalid request body', 400);
  }

  const earnedKarmaPoints = req.body.awards.karmaPoints.$inc;

  const user = await User.findById(userId);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }

  user.awards.karmaPoints += earnedKarmaPoints;

  // Calculate new level and progress
  const newLevel = calculateLevel(user.awards.karmaPoints);
  if (newLevel !== user.awards.level) {
    user.awards.level = newLevel;
    user.awards.progress = 0; // Reset progress after leveling up
  } else {
    // If level remains the same, only update progress
    user.awards.progress = calculateProgressToNextLevel(user.awards.karmaPoints);
  }
  // console.log(req.body);

  user.awards.title = getTitle(user.awards.karmaPoints);

  await user.save();
  res.status(200).json({ message: 'Successfully updated karma and level' });
};
