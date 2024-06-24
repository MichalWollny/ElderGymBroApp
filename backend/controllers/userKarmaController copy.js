import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/userSchema.js';
import { getTitle } from '../utils/karmaUtils.js';

const karmaPointsPerLevel = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

async function updateKarmaFunction(req, res, next) {
  const userId = req.uid;

  if (!req.body.awards || typeof req.body.awards.karmaPoints.$inc !== 'number') {
    throw new ErrorResponse('Invalid request body', 400);
  }

  const earnedKarmaPoints = req.body.awards.karmaPoints.$inc;

  const user = await User.findById(userId);
  console.log('Before update:', user);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }

  user.karmaPoints += earnedKarmaPoints;
  user.progress = (user.karmaPoints / karmaPointsPerLevel[user.awards.level - 1]) * 100;

  if (user.progress >= 100) {
    user.awards.level += 1;
    user.progress = 0;
    // Award trophies, badges, or other rewards for leveling up
  }

  user.awards.title = getTitle(user.karmaPoints);

  await user.save();
  res.status(200).json({ message: 'Successfully added karma' });
  console.log('After update:', user.awards.karmaPoints);
}

export const updateKarma = asyncHandler(updateKarmaFunction);
