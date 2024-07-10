import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/userSchema.js';
import { getTitle } from '../utils/karmaUtils.js';

// Assuming karmaPointsPerLevel is available in the scope
const karmaPointsPerLevel = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

function calculateLevel(currentKarmaPoints) {
  let level = 1;
  for (let i = 0; i < karmaPointsPerLevel.length; i++) {
    if (currentKarmaPoints >= karmaPointsPerLevel[i]) {
      level = i + 2; // Levels start at 1, so +2 to account for the next level
    } else {
      break;
    }
  }
  return level;
}
function calculateProgressToNextLevel(currentKarmaPoints) {
  // Assuming karmaPointsPerLevel defines the points needed for each level
  // Find the next level's index
  const nextLevelIndex = karmaPointsPerLevel.findIndex((points) => currentKarmaPoints < points);
  if (nextLevelIndex === -1) {
    // If the user's karma points exceed all defined levels, consider them at max progress
    return 100; // Assuming 100% is max progress
  }
  // Calculate progress towards the next level
  const pointsForNextLevel = karmaPointsPerLevel[nextLevelIndex];
  const pointsForCurrentLevel = nextLevelIndex === 0 ? 0 : karmaPointsPerLevel[nextLevelIndex - 1];
  const progress = ((currentKarmaPoints - pointsForCurrentLevel) / (pointsForNextLevel - pointsForCurrentLevel)) * 100;
  return progress;
}

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
