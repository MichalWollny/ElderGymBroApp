// Titles for Karma Points & Levels

export function getTitle(karmaPoints) {
  if (karmaPoints < 200) {
    return 'Cannon Fodder Cultist';
  } else if (karmaPoints < 400) {
    return 'Tentacle-Tickler Trainee';
  } else if (karmaPoints < 800) {
    return "Dagon's Dishwasher";
  } else if (karmaPoints < 1600) {
    return "Cthulhu's Coffee Fetcher";
  } else if (karmaPoints < 3200) {
    return 'Eldritch Errand Runner';
  } else if (karmaPoints < 6400) {
    return "Deep One's Doormat";
  } else if (karmaPoints < 12800) {
    return 'Paranormal Paper Pusher';
  } else if (karmaPoints < 256000) {
    return "Great Old One's Goofball";
  } else if (karmaPoints < 512000) {
    return 'Tentacle Tamer';
  } else if (karmaPoints < 1024000) {
    return 'Supreme Spookster';
  }
}

// Level Tresholds & Progress Calculation

export const karmaPointsPerLevel = [200, 400, 800, 1600, 3200, 6400, 12800, 256000, 512000, 1024000];

export function calculateLevel(currentKarmaPoints) {
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
export function calculateProgressToNextLevel(currentKarmaPoints) {
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
